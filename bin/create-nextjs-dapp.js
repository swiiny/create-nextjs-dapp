#!/usr/bin/env node

import input from '@inquirer/input';
import select from '@inquirer/select';
import ChildProcess from 'child_process';
import fs from 'fs';
import fetch from 'node-fetch';
import pMap from 'p-map';
import pRetry from 'p-retry';
import util from 'util';

// Matches '/<re/po>/tree/<ref>/<dir>'
const urlParserRegex = /^[/]([^/]+)[/]([^/]+)[/]tree[/]([^/]+)[/](.*)/;

// async cmd call
const exec = util.promisify(ChildProcess.exec);

// base create-nextjs-dapp repo url
const baseRepoUrl = 'https://github.com/JeremyTheintz/create-nextjs-dapp/tree/main/packages/';

// list all templates
const templates = [
	{
		value: 'base',
		name: 'base (no UI framework)'
	},
	{
		value: 'mui',
		name: 'MUI'
	}
];

const templateValues = templates.map((template) => template.value);

// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);

// project's name
let projectName;

// template's name
let template;

/* ==============================================================================================
================================ DOWNLOAD DATA ================================================
============================================================================================== */

async function fetchGithubFileList({ user, repository, ref = 'HEAD', directory, getFullData = false }) {
	if (!directory.endsWith('/')) {
		directory += '/';
	}

	const files = [];

	const response = await fetch(`https://api.github.com/repos/${user}/${repository}/git/trees/${ref}?recursive=1`);
	const contents = await response.json();

	if (contents.message) {
		throw new Error(contents.message);
	}

	for (const item of contents.tree) {
		if (item.type === 'blob' && item.path.startsWith(directory)) {
			files.push(getFullData ? item : item.path);
		}
	}

	files.truncated = contents.truncated;
	return files;
}

// print progress without a new line
function printProgress(progress) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(progress);
}

async function downloadRepo() {
	let user;
	let repository;
	let ref;
	let dir;

	const repoUrl = `${baseRepoUrl}${template}`;

	try {
		const parsedUrl = new URL(repoUrl);
		[, user, repository, ref, dir] = urlParserRegex.exec(parsedUrl.pathname);
	} catch {}

	// create a new directory with the project's name
	await exec(`mkdir -p ${projectName}`);

	const files = await fetchGithubFileList({
		user,
		repository,
		ref,
		directory: decodeURIComponent(dir),
		getFullData: true
	});

	if (files.length === 0) {
		console.log("Couldn't find any files in the repository, cleaning up files...");

		// clean up the directory
		await exec(`rm -rf ${projectName}`);

		process.exit(1);
	}

	const fetchRepoFile = async (file) => {
		const response = await fetch(
			`https://raw.githubusercontent.com/${user}/${repository}/${ref}/${file.path.replaceAll('#', '%23')}`
		);

		if (!response.ok) {
			throw new Error(`HTTP ${response.statusText} for ${file.path}`);
		}

		return response.text();
	};

	// count of downloaded files
	let downloaded = 0;

	const downloadFile = async (file) => {
		const localDownload = () => fetchRepoFile(file);
		const onFailedAttempt = (error) => {
			console.error(
				`Error downloading ${file.url}. Attempt ${error.attemptNumber}. ${error.retriesLeft} retries left.`
			);
		};

		const fileAsText = await pRetry(localDownload, { onFailedAttempt });

		const formattedPath = file.path.replaceAll('packages/' + template + '/', '');

		downloaded++;

		printProgress(`Downloading (${downloaded}/${files.length}) ${formattedPath}`);

		const paths = formattedPath.split('/');

		// remove file name from paths
		paths.pop();

		// check if directories in paths exist but not last index (file name) and create them if not
		for (let i = 0; i < paths.length; i++) {
			const path = paths.slice(0, i + 1).join('/');
			if (!fs.existsSync(`${projectName}/${path}`)) {
				fs.mkdirSync(`${projectName}/${path}`);
			}
		}

		// save Blob into the project's folder using vanilla ja
		fs.writeFile(projectName + '/' + formattedPath, fileAsText, (err) => {
			if (err) {
				console.log('err', err);
				throw err;
			}
		});
	};

	let error = false;

	await pMap(files, downloadFile, { concurrency: 20 }).catch((error) => {
		error = true;
		console.log("An error occured while downloading the files. It's probably a network error.");
	});

	if (error) {
		console.log('Some files could not be downloaded');
		process.exit(1);
	}

	printProgress(`Downloading (${downloaded}/${files.length})\n`);
}

/* ==============================================================================================
================================ SETUP PROJECT ================================================
============================================================================================== */

async function askForProjectName() {
	const newProjectName = await input({ message: "Enter your project's name", validate: (value) => value.length > 0 });

	// update projectName variable with the new project's name
	projectName = newProjectName;
}

// ask for template, add enum of templates
async function askForTemplate() {
	const newTemplate = await select({
		message: 'Select a template',
		choices: templates
	});

	// update template variable with the new template
	template = newTemplate;
}

async function init() {
	console.log("Welcome to the Create Nextjs Dapp CLI. Let's get started!");
	do {
		// check if there is two arguments
		if (args.length === 2) {
			// check if the first argument is a template
			if (templateValues.includes(args[0])) {
				template = args[0];
				projectName = args[1];
			} else {
				projectName = args[0];

				// check if the second argument is a template
				if (templateValues.includes(args[1])) {
					template = args[1];
				} else {
					// ask for template
					await askForTemplate();
				}
			}
		} else if (args.length === 1) {
			if (templateValues.includes(args[0])) {
				template = args[0];

				// ask for project's name
				await askForProjectName();
			} else {
				projectName = args[0];

				// ask for template
				await askForTemplate();
			}
		} else {
			// ask for template and project's name
			await askForProjectName();
			await askForTemplate();
		}
	} while (projectName === undefined && template === undefined);

	console.log('Abra kadabra! 🪄');
	console.log(projectName + ' has appeared! ✨');

	// start downloading the repo
	await downloadRepo();

	console.log('Installing dependencies 📦');
	await exec('cd ' + projectName + ' && npm install');

	// try to open IDE
	try {
		printProgress('Opening project...');
		// check if user has cmd open
		switch (process.platform) {
			case 'darwin':
				await exec('open -a "Visual Studio Code" ' + projectName);
				break;
			case 'win32':
				await exec('start code ' + projectName);
				break;
			default:
				await exec('code ' + projectName);
				break;
		}
	} catch {
		printProgress("Can't open project automatically. Please open it manually.");
	}

	console.log('\nHappy Hacking! 🎉');
	process.exit(1);
}

init();

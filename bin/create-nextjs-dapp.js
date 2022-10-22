#!/usr/bin/env node

import util from 'util';
import ChildProcess from 'child_process';
import fs from 'fs';
import request from 'request';
import select from '@inquirer/select';
import input from '@inquirer/input';
import saveFile from 'save-file';
import listContent from 'list-github-dir-content';
import pMap from 'p-map';
import pRetry from 'p-retry';
import fetch from 'node-fetch';
import JSZip from 'jszip';

// Matches '/<re/po>/tree/<ref>/<dir>'
const urlParserRegex = /^[/]([^/]+)[/]([^/]+)[/]tree[/]([^/]+)[/](.*)/;

const exec = util.promisify(ChildProcess.exec);

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
let dest;

// template's name
let template;

/* async function downloadRepo() {
	console.log('Starting some magic tricks...');

	request({ url: repoUrl, encoding: null }, async function (err, resp, body) {
		if (err) throw err;
		fs.writeFile(dest + '.zip', body, async function (err) {
			console.log('Abra kadabra! 🪄');
			console.log(dest + ' has appeared! ✨');

			await exec('unzip ' + dest + '.zip');

			// chmod 777 all files inside projectName
			await exec('chmod -R 777 ' + projectName + '-main');

			// chmod 777 all files inside projectName
			await exec('mv ' + projectName + '-main ' + dest);

			console.log('Cleaning up after myself 🧹');
			// clean up
			await exec('rm ' + dest + '.zip');
			await exec('rm -rf ' + dest + '/.git');
			await exec('rm -rf ' + dest + '/.github');
			await exec('rm -rf ' + dest + '/bin');
			await exec('rm -rf ' + dest + '/doc');

			console.log('Installing dependencies 📦');
			//await exec('cd ' + dest + ' && npm install');
			await exec('cd ' + dest + ' && npm install');

			console.log('Starting the app 🚀');
			await exec('cd ' + dest + ' && npm run dev');

			process.exit(0);
		});
	}).on('error', function (err) {
		console.log(err);
		process.exit(1);
	});
}
 */

/* ==============================================================================================
================================ DOWNLOAD DATA ================================================
============================================================================================== */

function escapeFilepath(path) {
	return path.replaceAll('#', '%23');
}

async function downloadRepo() {
	let user;
	let repository;
	let ref;
	let dir;

	const repoUrl = `https://github.com/JeremyTheintz/create-nextjs-dapp/tree/develop/packages/${template}`;

	try {
		const parsedUrl = new URL(repoUrl);
		[, user, repository, ref, dir] = urlParserRegex.exec(parsedUrl.pathname);

		console.log('Source:', { user, repository, ref, dir });
	} catch {}

	const files = await listContent.viaTreesApi({
		user,
		repository,
		ref,
		directory: decodeURIComponent(dir),
		getFullData: true
	});

	if (files.length === 0) {
		console.log("Couldn't find any files in the repository");
		return;
	}

	console.log('Found', files.length, 'files');

	const fetchPublicFile = async (file) => {
		const response = await fetch(
			`https://raw.githubusercontent.com/${user}/${repository}/${ref}/${escapeFilepath(file.path)}`
		);

		console.log('response', response);
		if (!response.ok) {
			throw new Error(`HTTP ${response.statusText} for ${file.path}`);
		}

		return response.blob();
	};

	let downloaded = 0;

	async function getZIP() {
		return new JSZip();
	}

	const downloadFile = async (file) => {
		const zipPromise = getZIP();

		const localDownload = () => fetchPublicFile(file);
		const onFailedAttempt = (error) => {
			console.error('error', error);
			console.error(
				`Error downloading ${file.url}. Attempt ${error.attemptNumber}. ${error.retriesLeft} retries left.`
			);
		};

		const blob = await pRetry(localDownload, { onFailedAttempt });

		downloaded++;
		console.log(`Downloading (${downloaded}/${files.length}) files…`, file.path);

		const zip = await zipPromise;
		zip.file(file.path.replace(dir + '/', ''), blob, {
			binary: true
		});
	};

	await pMap(files, downloadFile, { concurrency: 1 }).catch((error) => {
		console.error('error', error);
		console.log("An error occured while downloading the files. It's probably a network error.");
	});

	console.log("All files have been downloaded. Let's unzip them…");
}

/* ==============================================================================================
================================ SETUP PROJECT ================================================
============================================================================================== */

async function askForProjectName() {
	const newProjectName = await input({ message: "Enter your project's name", validate: (value) => value.length > 0 });

	// update dest variable with the new project's name
	dest = newProjectName;
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
	do {
		// check if there is two arguments
		if (args.length === 2) {
			// check if the first argument is a template
			if (templateValues.includes(args[0])) {
				template = args[0];
				dest = args[1];
			} else {
				dest = args[0];
				template = args[1];
			}
		} else if (args.length === 1) {
			if (templateValues.includes(args[0])) {
				template = args[0];

				// ask for project's name
				await askForProjectName();
			} else {
				dest = args[0];

				// ask for template
				await askForTemplate();
			}
		} else {
			// ask for template and project's name
			await askForProjectName();
			await askForTemplate();
		}
	} while (dest === undefined && template === undefined);

	// start downloading the repo
	await downloadRepo();
}

init();

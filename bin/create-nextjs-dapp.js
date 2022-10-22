#!/usr/bin/env node

import util from 'util';
import ChildProcess from 'child_process';
import fs from 'fs';
import request from 'request';
import select from '@inquirer/select';
import input from '@inquirer/input';

const exec = util.promisify(ChildProcess.exec);

const projectName = 'create-nextjs-dapp';
const repoUrl = `https://github.com/JeremyTheintz/${projectName}/archive/refs/heads/main.zip`;

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

async function downloadRepo() {
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

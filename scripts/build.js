#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);

// list all templates
const templates = ['base', 'mui'];

const success = '✔';
const fail = '×';

async function buildAll() {
	try {
		console.log('Initializing build...');

		console.log('\nCopy env variables...');
		await exec('cp -r .env ./common');

		console.log('\nShare common files...');
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cp -r ./common/ ./packages/${templates[i]}`);
				console.log(`${success} ${templates[i]}`);
			} catch {
				console.log(`${fail} ${templates[i]}`);
			}
		}

		console.log('\nInstall dependencies...');
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cd ./packages/${templates[i]} && npm install`);
				console.log(`${success} ${templates[i]}`);
			} catch {
				console.log(`${fail} ${templates[i]}`);
			}
		}

		console.log('\nBuild all templates...');
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cd packages/${templates[i]} && npm run build`);
				console.log(`${success} ${templates[i]}`);
			} catch {
				console.log(`${fail} ${templates[i]}`);
			}
		}
	} catch (err) {
		console.log('buildAll error', err);
	}
}

buildAll();

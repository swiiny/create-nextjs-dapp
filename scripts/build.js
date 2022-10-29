#!/usr/bin/env node

import util from 'util';
import ChildProcess from 'child_process';

const exec = util.promisify(ChildProcess.exec);

// list all templates
const templates = ['base', 'mui', 'styled-components'];

const success = '✔';
const fail = '×';

async function buildAll() {
	try {
		console.log('Initializing build...');

		console.log('\nCopy env variables...');

		try {
			await exec('cp -r .env ./common');
		} catch {
			console.log('Failed to copy env variables, but not a critical issue. Continuing...');
		}

		console.log('\nShare common files...');
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cp -r ./common/ ./packages/${templates[i]}`);
				console.log(`${success} ${templates[i]}`);
			} catch {
				console.log(`${fail} ${templates[i]}`);
				process.exit(1);
			}
		}

		console.log('\nInstall dependencies...');
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cd ./packages/${templates[i]} && npm install`);
				console.log(`${success} ${templates[i]}`);
			} catch {
				console.log(`${fail} ${templates[i]}`);
				process.exit(1);
			}
		}

		console.log('\nBuild all templates...');
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cd packages/${templates[i]} && npm run build`);
				console.log(`${success} ${templates[i]}`);
			} catch {
				console.log(`${fail} ${templates[i]}`);
				process.exit(1);
			}
		}
	} catch (err) {
		console.log('buildAll error', err);
		process.exit(1);
	}
}

buildAll();

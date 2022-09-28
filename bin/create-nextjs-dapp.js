#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);
const readline = require('readline');
const fs = require('fs');
const request = require('request');

const projectName = 'create-nextjs-dapp';
const repoUrl = `https://github.com/JeremyTheintz/${projectName}/archive/refs/heads/main.zip`;

// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);

// project's name
let dest;

try {
	dest = args[0];
} catch {
	// no projet name provided
}

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

			// move fetched files to destination direction choose by user
			await exec('mv ' + projectName + '-main ' + dest);

			console.log('Cleaning up after myself 🧹');
			// clean up
			await exec('rm ' + dest + '.zip');
			await exec('rm -rf ' + dest + '/.git');
			await exec('rm -rf ' + dest + '/.github');
			await exec('rm -rf ' + dest + '/bin');
			await exec('rm -rf ' + dest + '/doc');

			console.log('Installing dependencies 📦');
			await exec('cd ' + dest + ' && npm install');

			console.log('Opening app directory 📁');
			exec('open ' + dest);

			console.log('Happy Hacking Anon 🚀');
			process.exit(0);
		});
	}).on('error', function (err) {
		console.log(err);
		process.exit(1);
	});
}

// check if a directory with the name args[0] exists
if (fs.existsSync(args[0])) {
	console.log('directory already exists');
} else if (dest) {
	downloadRepo();
} else if (!dest) {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

	const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

	(async () => {
		do {
			try {
				const name = await prompt("Enter your project's name: ");

				dest = name;
				rl.close();
			} catch {
				console.log("can't prompt");
				break;
			}
		} while (dest === undefined);

		await downloadRepo();
	})();
}

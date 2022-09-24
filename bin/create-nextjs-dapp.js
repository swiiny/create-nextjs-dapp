#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const fs = require('fs');
const request = require('request');

const projectName = 'create-nextjs-dapp';
const repoUrl = `https://github.com/JeremyTheintz/${projectName}/archive/refs/heads/main.zip`;
// slice argv as we don't need the forst two elements (in this case)
const args = process.argv.slice(2, process.argv.length);

if (!args[0]) {
	console.log('Please provide a project name');
	process.exit(1);
}

async function downloadRepo() {
	console.log('Starting some magic tricks...');

	const dest = args[0];

	request({ url: repoUrl, encoding: null }, async function (err, resp, body) {
		if (err) throw err;
		fs.writeFile(dest + '.zip', body, async function (err) {
			console.log('Abra kadabra! 🪄');
			console.log(dest + ' has appeared! ✨');

			await exec('unzip ' + args[0] + '.zip');

			// chmod 777 all files inside projectName
			await exec('chmod -R 777 ' + projectName + '-main');

			// chmod 777 all files inside projectName
			await exec('mv ' + projectName + '-main ' + args[0]);

			console.log('Cleaning up after myself 🧹');
			// clean up
			await exec('rm ' + args[0] + '.zip');
			await exec('rm -rf ' + args[0] + '/.git');
			await exec('rm -rf ' + args[0] + '/.github');
			await exec('rm -rf ' + args[0] + '/bin');

			console.log('Installing dependencies 📦');
			//await exec('cd ' + args[0] + ' && npm install');
			await exec('cd ' + args[0] + ' && npm install');

			console.log('Starting the app 🚀');
			await exec('cd ' + args[0] + ' && npm run dev');

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
} else {
	downloadRepo();
}

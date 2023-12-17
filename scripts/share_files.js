import chalk from 'chalk';
import ChildProcess from 'child_process';
import util from 'util';

const exec = util.promisify(ChildProcess.exec);

// list all templates (those are the folders in packages/)
let templates = ChildProcess.execSync(`ls ./packages`).toString().split('\n');

// remove the last element of the array, which is an empty string
templates.pop();

const success = '✔';
const fail = '×';

async function shareAll() {
	try {
		console.log(chalk.cyan(`\nShare files with all templates...`));

		console.log(chalk.italic('\nCopy env variables in /common...'));

		try {
			await exec('cp -r .env ./common');
			console.log(chalk.green(`${success} .env`));
		} catch {
			console.log(chalk.yellow('Failed to copy env variables, but not a critical issue. Continuing...'));
		}

		console.log(chalk.italic('\nShare common files...'));
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cp -r ./common/ ./packages/${templates[i]}`);
				console.log(chalk.green(`${success} ${templates[i]}`));
			} catch {
				console.log(chalk.red(`${fail} ${templates[i]}`));
				process.exit(1);
			}
		}
	} catch (err) {
		console.log(chalk.red('Share files error', err));
		process.exit(1);
	}
}

shareAll();

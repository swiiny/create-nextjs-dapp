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

async function buildAll() {
	try {
		console.log(chalk.cyan('\nInitializing build...'));

		console.log(chalk.italic('\nInstall dependencies...'));
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cd ./packages/${templates[i]} && npm install`);
				console.log(chalk.green(`${success} ${templates[i]}`));
			} catch {
				console.log(chalk.red(`${fail} ${templates[i]}`));
				process.exit(1);
			}
		}

		console.log(chalk.italic('\nBuild all templates...'));
		for (let i = 0; i < templates.length; i++) {
			try {
				await exec(`cd packages/${templates[i]} && npm run build`);
				console.log(chalk.green(`${success} ${templates[i]}`));
			} catch {
				console.log(chalk.red(`${fail} ${templates[i]}`));
				process.exit(1);
			}
		}

		// success
		console.log(chalk.green('\nBuild completed successfully.'));
	} catch (err) {
		console.log(chalk.red('build error: ' + err));
		process.exit(1);
	}
}

buildAll();

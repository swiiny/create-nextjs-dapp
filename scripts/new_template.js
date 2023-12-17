import chalk from 'chalk';
import ChildProcess, { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const createTemplate = (templateName) => {
	console.log(chalk.cyan(`\nCreating new template '${chalk.bold(templateName)}'...`));

	const packagesDir = './packages';
	const baseTemplatePath = path.join(packagesDir, 'example');
	const newTemplatePath = path.join(packagesDir, templateName);

	// list all templates (those are the folders in packages/)
	let templates = ChildProcess.execSync(`ls ./packages`).toString().split('\n');

	// remove the last element of the array, which is an empty string
	templates.pop();

	if (templates.includes(`'${templateName}'`) || fs.existsSync(newTemplatePath)) {
		console.log(chalk.red(`× Template '${chalk.bold(templateName)}' already exists.`));
		return;
	}

	// create template folder
	if (!fs.existsSync(newTemplatePath)) {
		fs.mkdirSync(newTemplatePath);
	}

	// create pages folder
	if (!fs.existsSync(path.join(newTemplatePath, 'pages'))) {
		fs.mkdirSync(path.join(newTemplatePath, 'pages'));
	}

	// Copy files from base template
	const filesToCopy = ['package.json', 'pages/index.tsx', 'tsconfig.json', 'next.config.js', 'next-env.d.ts'];

	filesToCopy.forEach((file) => {
		const srcPath = path.join(baseTemplatePath, file);
		const destPath = path.join(newTemplatePath, file);
		fs.copyFileSync(srcPath, destPath);
	});

	// Update build.js
	const buildJsPaths = ['./scripts/build.js', './scripts/share_files.js'];

	buildJsPaths.forEach((buildJsPath) => {
		let buildJsContent = fs.readFileSync(buildJsPath, 'utf8');
		buildJsContent = buildJsContent.replace(
			/const templates = \[([^\]]+)\];/,
			`const templates = [$1, '${templateName}'];`
		);
		fs.writeFileSync(buildJsPath, buildJsContent);
	});

	// Share common files with new template
	execSync('npm run share-files', { stdio: 'inherit' });

	// Update package.json name property by replacing example with templateName
	const packageJsonPath = path.join(newTemplatePath, 'package.json');
	let packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');

	// update package name
	packageJsonContent = packageJsonContent.replace(
		/"name": "create-nextjs-dapp-example"/,
		`"name": "create-nextjs-dapp-${templateName}"`
	);
	// update package version to 1.0.0, without knowing the previous version
	packageJsonContent = packageJsonContent.replace(/"version": "[^"]+"/, `"version": "1.0.0"`);

	fs.writeFileSync(packageJsonPath, packageJsonContent);

	// Instructions for further steps
	console.log(
		chalk.green(`\n✔ Template '${chalk.bold(templateName)}' created successfully.`) +
			chalk.cyan(
				`\n\nNavigate to your template folder with ${chalk.underline(
					`cd ./packages/${templateName}`
				)} and start development with 'npm run dev'.\n`
			)
	);
};

// Get the template name from the command line arguments
const templateName = process.argv[2];

if (!templateName) {
	console.log(chalk.red('Please provide a template name.'));
	console.log(chalk.yellow('Example: npm run new-template my-template'));
	process.exit(1);
}

// init script
createTemplate(templateName);

import { Octokit } from '@octokit/rest';
import fs from 'fs';
import { exit } from 'process';

// Initialize Octokit with your token
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

// Your repo information
const owner = 'swiiny';
const repo = 'create-nextjs-dapp';

// Read the version-names.rc file
const versionNames = JSON.parse(fs.readFileSync('versions.json'));

async function renameRelease() {
	try {
		// Fetch the latest release
		const { data: latestRelease } = await octokit.rest.repos.getLatestRelease({
			owner,
			repo
		});

		// Get the version number (assuming tag is the version)
		const version = latestRelease.tag_name;

		// Determine the name from the version
		let newName = '';
		for (const [versionPattern, name] of Object.entries(versionNames)) {
			if (new RegExp(versionPattern.replace('x', '\\d+')).test(version)) {
				newName = name;
				break;
			}
		}

		if (!newName) {
			console.log(`No matching version name for ${version}`);
			exit(1);
		}

		// Update the release name
		await octokit.rest.repos.updateRelease({
			owner,
			repo,
			release_id: latestRelease.id,
			name: `${newName} (${version})`
		});

		console.log(`Release renamed to ${newName}`);

		exit(0);
	} catch (error) {
		console.error(`Error renaming release: ${error}`);
		exit(1);
	}
}

renameRelease();

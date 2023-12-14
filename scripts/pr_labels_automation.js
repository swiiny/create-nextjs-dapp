import { Octokit } from '@octokit/rest';
import fs from 'fs';
import util from 'util';

const octokit = new Octokit({ auth: process.env.TOKEN });
const owner = process.env.GITHUB_REPOSITORY.split('/')[0];
const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
const prNumber = process.env.GITHUB_EVENT_PATH
	? JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')).number
	: undefined;

/**
 * This script is used to automatically add labels to PRs based on the checkboxes in the PR body.
 */
async function addLabel() {
	try {
		const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: prNumber });

		const body = pr.body.toLowerCase();
		const typesOfChange = ['Bug Fix', 'New Feature', 'Breaking Change', 'Refactor', 'Documentation', 'Other'];
		const labelsToAdd = [];

		typesOfChange.forEach((type) => {
			if (body.includes(`- [x] ${type.toLowerCase()}`)) {
				labelsToAdd.push(type);
			}
		});

		if (labelsToAdd.length > 0) {
			await octokit.issues.setLabels({
				owner,
				repo,
				issue_number: prNumber,
				labels: labelsToAdd.map((label) => label.toLowerCase())
			});
		}
	} catch (error) {
		console.log(util.inspect(error, false, null, true /* enable colors */));
		console.error(`Error: ${error.message}`);
	}
}

addLabel();

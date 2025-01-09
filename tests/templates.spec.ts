import { expect, test } from '@playwright/test';
import { spawn } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templates = [
	{ name: 'Base', path: 'packages/base' },
	{ name: 'MUI', path: 'packages/mui' },
	{ name: 'Styled Components', path: 'packages/styled-components' },
	{ name: 'Stylex', path: 'packages/stylex' },
	{ name: 'Tailwind', path: 'packages/tailwind' }
];

templates.forEach(({ name, path: templatePath }) => {
	test.describe(`${name} template`, () => {
		let serverProcess;

		test.beforeAll(async () => {
			// Start the template server
			serverProcess = spawn('npm', ['run', 'start'], {
				cwd: path.resolve(__dirname, `../${templatePath}`),
				shell: true
			});

			// Wait for the server to start (customize this timeout if necessary)
			await new Promise((resolve) => setTimeout(resolve, 5000));
		});

		test.afterAll(() => {
			// Kill the server process
			if (serverProcess) serverProcess.kill();
		});

		test(`renders ${name} template and matches expectation`, async ({ page }) => {
			await page.goto('http://localhost:3000'); // Assumes each template runs on localhost:3000

			// Wait for the page to load completely
			await page.waitForLoadState('networkidle');

			// Wait an extra second for animations or delayed rendering
			await page.waitForTimeout(1000);

			const formattedName = name.toLowerCase().replace(/\s/g, '-');

			// Path to save the actual screenshot (for debugging purposes)
			const actualScreenshotPath = path.resolve(
				__dirname,
				`../tests/snapshots/actuals/${formattedName}-template-actual.png`
			);

			// Path to the expectation image
			const expectedSnapshotPath = path.resolve(__dirname, `../tests/snapshots/template-snapshot-expectation.png`);

			// Path to save the diff image (for debugging purposes)
			const diffScreenshotPath = path.resolve(__dirname, `../tests/snapshots/diffs/${formattedName}-template-diff.png`);

			// Take a screenshot of the full page
			const screenshotBuffer = await page.screenshot();

			// Save the actual screenshot to a file
			writeFileSync(actualScreenshotPath, screenshotBuffer);

			// Load the actual and expected images
			const actualImage = PNG.sync.read(readFileSync(actualScreenshotPath));
			const expectedImage = PNG.sync.read(readFileSync(expectedSnapshotPath));

			// Ensure both images have the same dimensions
			if (actualImage.width !== expectedImage.width || actualImage.height !== expectedImage.height) {
				throw new Error(`Image dimensions do not match for ${name}`);
			}

			// Create a diff image
			const diffImage = new PNG({ width: actualImage.width, height: actualImage.height });
			const mismatchedPixels = pixelmatch(
				actualImage.data,
				expectedImage.data,
				diffImage.data,
				actualImage.width,
				actualImage.height,
				{ threshold: 0.1 } // Adjust threshold as needed (0.1 = 10% tolerance)
			);

			// Save the diff image to a file
			writeFileSync(diffScreenshotPath, PNG.sync.write(diffImage));

			// Assert that there are no mismatched pixels
			expect(mismatchedPixels).toBe(0);
		});

		/* test(`executes logic correctly in ${name} template`, async ({ page }) => {
			await page.goto('http://localhost:3000');

			await page.waitForTimeout(1000);

			await page.click('[data-testid="connect-wallet-button"]');
			const result = await page.locator('.modal-container-mobile');
			await expect(result).toBeVisible();
		}); */
	});
});

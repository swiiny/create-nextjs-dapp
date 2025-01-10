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
	{ name: 'Base', path: 'packages/base', port: 3001 },
	{ name: 'MUI', path: 'packages/mui', port: 3002 },
	{ name: 'Styled Components', path: 'packages/styled-components', port: 3003 },
	{ name: 'Stylex', path: 'packages/stylex', port: 3004 },
	{ name: 'Tailwind', path: 'packages/tailwind', port: 3005 }
];

templates.forEach(({ name, path: templatePath, port }) => {
	test.describe.parallel(`${name} template`, () => {
		let serverProcess;

		test.beforeAll(async () => {
			// Start the template server on a unique port
			serverProcess = spawn('npm', ['run', 'start', '--', `--port=${port}`], {
				cwd: path.resolve(__dirname, `../${templatePath}`),
				shell: true
			});

			// Wait for the server to start
			await new Promise((resolve) => setTimeout(resolve, 3000)); // Increase timeout if needed
		});

		test.afterAll(() => {
			// Kill the server process
			if (serverProcess) serverProcess.kill();
		});

		test(`renders ${name} template and matches expectation`, async ({ page }) => {
			await page.goto(`http://localhost:${port}`); // Use unique port for each template

			await page.waitForLoadState('networkidle');

			await page.waitForTimeout(1000);

			const formattedName = name.toLowerCase().replace(/\s/g, '-');

			const actualScreenshotPath = path.resolve(
				__dirname,
				`../tests/snapshots/actuals/desktop-${formattedName}-template-actual.png`
			);
			const expectedSnapshotPath = path.resolve(
				__dirname,
				`../tests/snapshots/desktop-template-snapshot-expectation.png`
			);
			const diffScreenshotPath = path.resolve(
				__dirname,
				`../tests/snapshots/diffs/desktop-${formattedName}-template-diff.png`
			);

			const screenshotBuffer = await page.screenshot();
			writeFileSync(actualScreenshotPath, screenshotBuffer);

			const actualImage = PNG.sync.read(readFileSync(actualScreenshotPath));
			const expectedImage = PNG.sync.read(readFileSync(expectedSnapshotPath));

			if (actualImage.width !== expectedImage.width || actualImage.height !== expectedImage.height) {
				throw new Error(`Image dimensions do not match for ${name}`);
			}

			const diffImage = new PNG({ width: actualImage.width, height: actualImage.height });
			const mismatchedPixels = pixelmatch(
				actualImage.data,
				expectedImage.data,
				diffImage.data,
				actualImage.width,
				actualImage.height,
				{ threshold: 0.1 }
			);

			writeFileSync(diffScreenshotPath, PNG.sync.write(diffImage));
			expect(mismatchedPixels).toBeLessThanOrEqual(100);
		});

		test(`executes logic correctly in ${name} template`, async ({ page }) => {
			await page.goto(`http://localhost:${port}`);
			await page.waitForTimeout(1000);

			await page.click('[data-testid="connect-wallet-button"]');
			const result = await page.locator('.modal-container-mobile');
			await expect(result).toBeVisible();
		});
	});
});

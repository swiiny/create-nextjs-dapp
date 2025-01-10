import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: '.env', override: true });

const isCIEnv = !!process.env.CI;

export default defineConfig({
	testDir: './tests',
	snapshotDir: './tests/snapshots',
	workers: isCIEnv ? 2 : 5,
	retries: 2,
	reporter: [
		['list', {}],
		['html', { open: 'on-failure' }]
	],
	use: {
		trace: 'retain-on-failure',
		deviceScaleFactor: 1
	},
	projects: [
		{
			name: 'chromium_desktop',
			testMatch: '**/*.desktop.spec.ts',
			use: {
				headless: true,
				...devices['Desktop Chrome HiDPI'],
				viewport: { width: 1280, height: 720 }
			}
		},
		{
			name: 'safari_mobile',
			testMatch: '**/*.mobile.spec.ts',
			use: { headless: true, ...devices['iPhone 13'], hasTouch: true, isMobile: true }
		}
	]
});

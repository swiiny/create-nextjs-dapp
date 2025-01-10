import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	snapshotDir: './tests/snapshots',
	workers: 2,
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
				...devices['Desktop Chrome'],
				viewport: { width: 1280, height: 720 },
				permissions: ['clipboard-read', 'clipboard-write']
			}
		},
		{
			name: 'safari_mobile',
			testMatch: '**/*.mobile.spec.ts',
			use: { headless: true, ...devices['iPhone 13'], hasTouch: true, isMobile: true }
		}
	]
});

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	snapshotDir: './tests/snapshots',
	workers: 2,
	use: {
		headless: true,
		...devices['iPhone 13']
	},
	testMatch: '*.mobile.spec.ts' // Only run mobile-specific spec files
});

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	snapshotDir: './tests/snapshots',
	workers: 5, // Adjust based on system capability
	use: {
		headless: true,
		...devices['iPhone 13']
	},
	testMatch: '*.mobile.spec.ts' // Only run mobile-specific spec files
});

import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	snapshotDir: './tests/snapshots',
	workers: 2,
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 }
	},
	testMatch: '*.desktop.spec.ts' // Only run desktop-specific spec files
});

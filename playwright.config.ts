import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	snapshotDir: './tests/snapshots',
	workers: 5,
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 }
	}
});

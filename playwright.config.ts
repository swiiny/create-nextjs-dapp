import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	snapshotDir: './tests/snapshots',
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 }
	}
});

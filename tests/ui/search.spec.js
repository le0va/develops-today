import { expect } from '@playwright/test';
import { test } from '../../fixtures/playlist.fixture.js';

test('should filter tracks by search input', async ({ page, playlistPage }) => {
  await playlistPage.searchTrack('Summer');

  await expect(playlistPage.trackItems).toHaveCount(1);
  await expect(page.getByText('Summer Breeze')).toBeVisible();
});

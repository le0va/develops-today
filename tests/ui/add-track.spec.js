import { expect } from '@playwright/test';
import { test } from '../../fixtures/playlist.fixture.js';

test('should add track to playlist', async ({ playlistPage }) => {
  const track = playlistPage.getTrack(0);
  const trackName = await playlistPage.getTrackName(track);

  await playlistPage.addTrack(track);

  await expect(playlistPage.playlist).toContainText(trackName);
});

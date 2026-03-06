import { expect } from '@playwright/test';
import { test } from '../../fixtures/playlist.fixture.js';
import { sumDurations } from '../../utils/time-utils.js';

test('should calculate playlist duration correctly', async ({ playlistPage }) => {
  const durations = [];

  for (let i = 0; i < 3; i++) {
    const track = playlistPage.getTrack(i);
    const duration = await playlistPage.getTrackDuration(track);
    durations.push(duration);
    await playlistPage.addTrack(track);
  }

  const expectedDuration = sumDurations(durations);
  const durationUI = await playlistPage.getPlaylistDuration();

  expect(Number(durationUI)).toBe(expectedDuration);
});

import { test as base } from '@playwright/test';
import PlaylistPage from '../pages/playlist.page.js';

export const test = base.extend({
  playlistPage: async ({ page }, use) => {
    const playlistPage = new PlaylistPage(page);
    await playlistPage.open();
    await use(playlistPage);
  },
});

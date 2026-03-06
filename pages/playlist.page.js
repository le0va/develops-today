class PlaylistPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByLabel('Search');
    this.trackItems = page.locator('#tracklist .MuiGrid-container');
    this.playlist = page.locator('#playlist');
    this.playlistDuration = page.locator('#playlist-duration');
  }

  async open() {
    await this.page.goto('/');
  }

  async searchTrack(name) {
    await this.searchInput.fill(name);
  }

  getTrack(index) {
    return this.trackItems.nth(index);
  }

  async getTrackName(track) {
    return await track.locator('p').first().textContent();
  }

  async getTrackDuration(track) {
    return await track.locator('p').nth(1).textContent();
  }

  async addTrack(track) {
    await track.locator('button').click();
  }

  async getPlaylistDuration() {
    return await this.playlistDuration.textContent();
  }
}

export default PlaylistPage;

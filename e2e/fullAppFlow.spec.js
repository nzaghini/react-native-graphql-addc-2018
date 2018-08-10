describe('Full App Flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have list of screens on screen', async () => {
    await expect(element(by.id('movieList'))).toBeVisible();
  });

  it('should navigate to movie details', async () => {
    await element(by.id('movieId_1')).tap();
    await expect(element(by.id('movieDetailsId_1'))).toBeVisible();
    await expect(element(by.label('Interstellar'))).toBeVisible();
  });

})
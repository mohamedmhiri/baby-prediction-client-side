import { DataPage } from './app.po';

describe('data App', () => {
  let page: DataPage;

  beforeEach(() => {
    page = new DataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

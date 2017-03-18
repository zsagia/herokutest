import { HerokutestPage } from './app.po';

describe('herokutest App', function() {
  let page: HerokutestPage;

  beforeEach(() => {
    page = new HerokutestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

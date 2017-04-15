import { RxngPage } from './app.po';

describe('rxng App', () => {
  let page: RxngPage;

  beforeEach(() => {
    page = new RxngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Initial Page');
  });
});

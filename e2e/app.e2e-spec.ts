import { TVPage } from './app.po';

describe('tv App', () => {
  let page: TVPage;

  beforeEach(() => {
    page = new TVPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

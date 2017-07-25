import { Dennisaur.Github.IoPage } from './app.po';

describe('dennisaur.github.io App', () => {
  let page: Dennisaur.Github.IoPage;

  beforeEach(() => {
    page = new Dennisaur.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

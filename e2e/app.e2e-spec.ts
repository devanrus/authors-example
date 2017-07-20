import { AuthorsExamplePage } from './app.po';

describe('authors-example App', () => {
  let page: AuthorsExamplePage;

  beforeEach(() => {
    page = new AuthorsExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

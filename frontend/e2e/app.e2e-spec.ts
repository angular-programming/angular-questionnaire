import { Ng2demoCliPage } from './app.po';

describe('ng2demo-cli App', () => {
  let page: Ng2demoCliPage;

  beforeEach(() => {
    page = new Ng2demoCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { StbEmulatorShellPage } from './app.po';

describe('stb-emulator-shell App', () => {
  let page: StbEmulatorShellPage;

  beforeEach(() => {
    page = new StbEmulatorShellPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

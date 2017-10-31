import { AngularHomeFormPage } from './app.po';

describe('angular-home-form App', () => {
  let page: AngularHomeFormPage;

  beforeEach(() => {
    page = new AngularHomeFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

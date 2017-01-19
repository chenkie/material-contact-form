import { MaterialContactFormPage } from './app.po';

describe('material-contact-form App', function() {
  let page: MaterialContactFormPage;

  beforeEach(() => {
    page = new MaterialContactFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

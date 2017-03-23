import { TreinamentoAngular2Page } from './app.po';

describe('treinamento-angular2 App', () => {
  let page: TreinamentoAngular2Page;

  beforeEach(() => {
    page = new TreinamentoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

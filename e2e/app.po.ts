import { browser, by, element } from 'protractor';

export class ProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('js-root h1')).getText();
  }
}

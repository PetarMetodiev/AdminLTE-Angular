import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('alte-root h1')).getText();
	}
}

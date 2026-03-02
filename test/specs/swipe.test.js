import SwipePage from '../../src/pageobjects/swipe.page.js';

describe('WebdriverIO Mobile Swipe Portfolio Project', () => {

    beforeEach(async () => {
        await browser.terminateApp('com.wdiodemoapp');
        await browser.activateApp('com.wdiodemoapp');
        await browser.setOrientation('PORTRAIT');
    });

    it('should swipe horizontally through the carousel cards', async () => {
        await SwipePage.openSwipeScreen();

        const cardOneText = await $('android=new UiSelector().textContains("FULLY OPEN SOURCE")');
        await expect(cardOneText).toBeDisplayed();

        await SwipePage.swipeLeft();

        const cardTwoText = await $('android=new UiSelector().textContains("GREAT COMMUNITY")');

        await expect(cardOneText).not.toBeDisplayed();
        await cardTwoText.waitForExist({ timeout: 5000 });
        await expect(cardTwoText).toBeDisplayed();

    });
});
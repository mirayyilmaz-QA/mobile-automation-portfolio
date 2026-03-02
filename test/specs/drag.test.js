import DragPage from '../../src/pageobjects/drag.page.js';

describe('WebdriverIO Mobile Drag and Drop Portfolio Project', () => {

    beforeEach(async () => {
        await browser.terminateApp('com.wdiodemoapp');
        await browser.activateApp('com.wdiodemoapp');
        await DragPage.openDragScreen();
    });

    it('should drag a puzzle piece to the correct drop zone', async () => {
        await DragPage.dragAndDropElement();

        // if successful, the piece is replaced by a "completed" state and disappears from the tray
        await expect(DragPage.dragPiece).not.toBeDisplayed();
    });
});
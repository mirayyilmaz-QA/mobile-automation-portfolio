class SwipePage {


    get swipeMenuIcon() { return $('~Swipe'); }
    get swipeHeader() { return $('android=new UiSelector().textContains("Swipe horizontal")'); }
    get cardTwo() { return $('android=new UiSelector().textContains("GREAT COMMUNITY")'); }


    async openSwipeScreen() {
        await this.swipeMenuIcon.waitForDisplayed({ timeout: 5000 });
        await this.swipeMenuIcon.click();
        await this.swipeHeader.waitForDisplayed({ timeout: 5000 });
    }


    //I move from right (80% of screen) to left (20% of screen)
    async swipeLeft() {
        const size = await browser.getWindowSize();

        //Y coordinate higher (40% from the top) to stay far away from that bottom navigation bar
        const startX = Math.round(size.width * 0.8);
        const endX = Math.round(size.width * 0.2);
        const higherY = Math.round(size.height * 0.7);

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: higherY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerMove', duration: 500, x: startX, y: higherY },
                    { type: 'pointerMove', duration: 1500, x: endX, y: higherY },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
        await browser.pause(500);
    }
}

export default new SwipePage();
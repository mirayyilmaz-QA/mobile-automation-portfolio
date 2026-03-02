class MobileUtils {

    async waitAndClick(element) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.click();
    }
}
export default new MobileUtils();
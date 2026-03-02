import LoginPage from '../../src/pageobjects/login.page.js';
import { loginData } from '../../src/data/loginData.js';

describe('WebdriverIO Mobile Login Portfolio Project', () => {

    beforeEach(async () => {
        await browser.terminateApp('com.wdiodemoapp');
        await browser.activateApp('com.wdiodemoapp');
        await browser.setOrientation('PORTRAIT');
        await LoginPage.openLoginScreen();

    });

    it('should login successfully with valid credentials', async () => {

        const user = loginData.validUser;

        await LoginPage.submitLogin(user.email, user.password);

        await LoginPage.waitForSuccess();
        await expect(LoginPage.successTitle).toBeDisplayed();

        await LoginPage.closePopup();
    });

    it('should show error for a invalid email', async () => {

        const validUser = loginData.validUser
        const invalidUser = loginData.invalidUser;

        await LoginPage.submitLogin(invalidUser.email, validUser.password);

        await LoginPage.waitForEmailError();

        await expect(LoginPage.emailErrorMessage).toBeDisplayed();

        await LoginPage.closePopup();
    });


    it('should show error for a short password format', async () => {

        const validUser = loginData.validUser
        const invalidUser = loginData.invalidUser;

        await LoginPage.submitLogin(validUser.email, invalidUser.password);

        await LoginPage.waitForPasswordError();

        await expect(LoginPage.passwordErrorMessage).toBeDisplayed();

        await LoginPage.closePopup();
    });

    it('should toggle between Login and Sign Up tabs', async () => {

        await LoginPage.switchToSignUp();

        await expect(LoginPage.signUpButton).toBeDisplayed();

        await LoginPage.switchToLogin();

        await expect(LoginPage.loginButton).toBeDisplayed();

    });




});
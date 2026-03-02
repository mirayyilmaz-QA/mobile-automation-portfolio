
class LoginPage {

    //cross-platform selectors
    get loginMenuIcon() { return $('~Login'); }
    get emailField() { return $('~input-email'); }
    get passwordField() { return $('~input-password'); }
    get loginButton() { return $('~button-LOGIN'); }
    get signUpTab() { return $('~button-sign-up-container'); }
    get loginTab() { return $('~button-login-container'); }
    get signUpButton() { return $('~button-SIGN UP'); }

    //platform-specific selectors
    get okButton() {
        return driver.isAndroid
            ? $('android=new UiSelector().textContains("OK")')
            : $('~OK'); // iOS standard
    }

    get successTitle() {
        return driver.isAndroid
            ? $('android=new UiSelector().textContains("Success")')
            : $('~Success');
    }

    get emailErrorMessage() {
        return driver.isAndroid
            ? $('android=new UiSelector().textContains("Please enter a valid email address")')
            : $('~Please enter a valid email address');
    }

    get passwordErrorMessage() {
        return driver.isAndroid
            ? $('android=new UiSelector().textContains("Please enter at least 8 characters")')
            : $('~Please enter at least 8 characters');
    }


    async switchToSignUp() {
        await this.signUpTab.waitForDisplayed({ timeout: 10000 });
        await this.signUpTab.click();
    }

    async switchToLogin() {
        await this.loginTab.waitForDisplayed({ timeout: 10000 });
        await this.loginTab.click();
    }


    async openLoginScreen() {
        await this.loginMenuIcon.waitForDisplayed({ timeout: 10000 });
        await this.loginMenuIcon.click();
    }

    async scrollToLoginButton() {
        await this.loginButton.scrollIntoView();
    }

    async submitLogin(email, password) {

        await this.emailField.waitForDisplayed({ timeout: 10000 });
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.scrollToLoginButton();
        await this.loginButton.click();
    }

    async waitForSuccess() {
        await this.successTitle.waitForDisplayed({ timeout: 10000 });
    }

    async waitForEmailError() {
        await this.emailErrorMessage.waitForDisplayed({ timeout: 10000 });
    }

    async waitForPasswordError() {
        await this.passwordErrorMessage.waitForDisplayed({ timeout: 10000 });
    }

    async closePopup() {

        const isButtonVisible = await this.okButton.waitForDisplayed({
            timeout: 2000,
            reverse: false
        }).catch(() => false);

        if (isButtonVisible) {
            await this.okButton.click();
        }
    }
}

export default new LoginPage();
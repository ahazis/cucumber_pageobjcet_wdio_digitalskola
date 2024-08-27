const { $, expect, browser } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {

    get url_login () {
        return 'https://www.saucedemo.com/'
    }   

    get inputUsername () {
        return $('#user-name')
    }
    get inputPassword () {
        return $('#password')   
    }
    get btnSubmit () {
        return $('#login-button[name="login-button"]')
    }
    get errorMessageFailed () {
        return $('[class="error-message-container error"]')
    }
    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }

// ---------validation---------
    async loginFailed (errorMessage) {
        await expect(this.errorMessageFailed).toHaveText(
            expect.stringContaining(errorMessage)
        )  
    }

// ---------asertloginpage---------
    async assert_loginpage () {
        await expect(browser).toHaveUrl(this.url_login)
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();

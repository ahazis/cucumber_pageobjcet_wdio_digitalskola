const { $, expect } = require('@wdio/globals')
const Page = require('./page')

class CheckoutPage extends Page {

    get isi_name () {
        return $('#first-name')
    }
    get isi_lastname () {   
        return $('#last-name')
    }
    get isi_postalcode () {   
        return $('#postal-code')
    }
    get btn_continue () {
        return $('#continue')
    }
    get btn_cancel () {
        return $('#cancel')
    }
    get url_checkout () {
        return 'https://www.saucedemo.com/checkout-step-one.html'
    }

    //---------action---------
    async action_checkout () {
        await this.isi_name.setValue('John')
        await this.isi_lastname.setValue('Doe')
        await this.isi_postalcode.setValue('12345')
        await this.btn_continue.click()
    }

    //---------assert---------
    async assert_checkout () {
        await expect(this.btn_continue).toBeExisting()
        await expect(this.btn_cancel).toBeExisting()
        await expect(browser).toHaveUrl(this.url_checkout)
    }

    open () {
        return super.open('checkout-step-one.html');
    }
}

module.exports = new CheckoutPage()
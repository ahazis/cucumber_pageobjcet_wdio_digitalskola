const { $, expect } = require('@wdio/globals')
const Page = require('./page')

class OverviewPage extends Page {

    get finish () {
        return $('#finish')
    }
    get cancel () {   
        return $('#cancel')
    }
    get url_overview () {
        return 'https://www.saucedemo.com/checkout-step-two.html'
    }

    //---------action---------
    async action_overview () {
        await this.finish.click()         
    }
    
    //---------assert---------
    async assert_overview () {
        await expect(this.finish).toBeExisting()
        await expect(this.cancel).toBeExisting()
        await expect(browser).toHaveUrl(this.url_overview)
    }

    open () {
        return super.open('checkout-step-two.html');
    }
}

module.exports = new OverviewPage()
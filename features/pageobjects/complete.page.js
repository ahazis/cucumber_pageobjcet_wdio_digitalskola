const { $, expect } = require('@wdio/globals')
const Page = require('./page')

class CompletePage extends Page {
   
    get backHome () {
        return $('#back-to-products')
    }
    get url_complete () {
        return 'https://www.saucedemo.com/checkout-complete.html'
    }   
    // ---------action---------
    async btngobackhome () {
        await this.backHome.click()        
    }
    // ---------assert---------
    async assert_complete () {
        await expect(this.backHome).toBeExisting()
        await expect(browser).toHaveUrl(this.url_complete)
    }
    open () {
        return super.open('checkout-complete.html');
    }      
}
module.exports = new CompletePage()

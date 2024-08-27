const { $, expect } = require('@wdio/globals')
const Page = require('./page')

class CartPage extends Page {

    get btn_checkout () {
        return $('#checkout')
    }
    get continue_shopping () {
        return $('#continue-shopping')
    }
    get cartbadge () {
        return $('[data-test="shopping-cart-badge"]')
    }
    get urlcart () {
        return 'https://www.saucedemo.com/cart.html'
    }   

//---------action---------
    async action_cart () {
        await this.btn_checkout.click()
        await browser.pause(1000)
        await browser.back()           
        await this.continue_shopping.click()
        await browser.pause(1000)
        await browser.back()
    }

    async action_cart_checkout () {
        await this.btn_checkout.click()
    }

//---------assert---------
    async assert_cart () {
        await expect(this.btn_checkout).toBeExisting()
        await expect(this.continue_shopping).toBeExisting()
        await expect(this.cartbadge).toBeExisting()
        await expect(browser).toHaveUrl(this.urlcart)
    }

    open () {
        return super.open('cart.html');
    }

}   

module.exports = new CartPage();
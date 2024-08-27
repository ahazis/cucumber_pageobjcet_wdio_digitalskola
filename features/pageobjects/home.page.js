const { $, expect } = require('@wdio/globals')
const Page = require('./page')


class HomePage extends Page {

    get btnAddToCart () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get iconcart () {
        return $('#shopping_cart_container')
    }
    get backToHome () {
        return $('#back-to-products')
    }
    get urlhomepage () {
        return 'https://www.saucedemo.com/inventory.html'
    }
    get burgerbutton () {
        return $('#react-burger-menu-btn')
    }
    get logoutbutton () {
        return $('#logout_sidebar_link')
    }
// ---------filter Product---------
    get filterAtoZ () {
        return $('[value="az"]')
    }
    get filterZtoA () {
        return $('[value="za"]')
    }
    get filterLowtoHigh () {
        return $('[value="lohi"]')
    }
    get filterHighToLow () {
        return $('[value="hilo"]')
    }
    
// ---------Nama product---------
    get SauceLabsBackpack () {
        return $('#item_4_img_link')
    }
    // get SauceLabsBackpackName () {
    //     return $('#item_4_title_link')
    // }

// ---------action export---------
    async addItemToCart () {
    await this.btnAddToCart.click()
    await browser.pause(1000) // Tunggu sebentar setelah menambahkan item
}
// ---------action logout---------
    async actionbtnLogout () {
        await this.burgerbutton.click()
        await browser.pause(3000)
        await this.logoutbutton.click()
    }



// ---------action product validation---------
    async actionProduct () {
        await this.btnAddToCart.click()
        await browser.pause(1000)
        await this.filterAtoZ.click()
        await browser.pause(1000)
        await this.filterZtoA.click()
        await browser.pause(1000)
        await this.filterLowtoHigh.click()
        await browser.pause(1000)
        await this.filterHighToLow.click()
        await browser.pause(1000)
        await this.SauceLabsBackpack.click()
        await browser.pause(1000)
        await this.backToHome.click()    
        await browser.pause(1000)
        await this.iconcart.click()
        await browser.pause(1000)
    }
// ---------assert product validation---------
    async AssertvalidationProduct () {
        await expect(this.btnAddToCart).toBeExisting()
        await expect(this.iconcart).toBeExisting()
        await expect(this.filterAtoZ).toBeExisting()
        await expect(this.filterZtoA).toBeExisting()
        await expect(this.filterLowtoHigh).toBeExisting()
        await expect(this.filterHighToLow).toBeExisting()
        await expect(this.SauceLabsBackpack).toBeExisting()
        await expect(browser).toHaveUrl(this.urlhomepage)
    }
    
    open () {
        return super.open('inventory.html');
    }
}

module.exports = new HomePage()
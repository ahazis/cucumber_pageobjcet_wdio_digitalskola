const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const CartPage = require('../pageobjects/cart.page')
const CheckoutPage = require('../pageobjects/checkout.page')
const OverviewPage = require('../pageobjects/overview.page')
const completePage = require('../pageobjects/complete.page')


    
Given('User on the login page', async () => {
    await LoginPage.open()
})
When(/^User login with username "(.*)" and password "(.*)"/, async (username, password) => {
    await LoginPage.login(username, password)
})
// ------------login------------
Then('User should be on homepage', async () => {
    await HomePage.AssertvalidationProduct()
})
Then(/^User should see an error message "(.*)"$/, async (ErrorMessage) => {
    await LoginPage.loginFailed(ErrorMessage)
})
// ------------homepage------------
When('User into homepage', async () => {
    await HomePage.actionProduct()    
})
Then('User should be on cartpage', async () => {
    await CartPage.assert_cart()
})
// ------------cartpage------------
When('User into cartpage', async () => {
    await HomePage.open()   
    await HomePage.addItemToCart()        
    // ---------cart page---------
    await CartPage.open()    
    await CartPage.action_cart_checkout()
})
Then('User should be on checkout page', async () => { 
    await CheckoutPage.assert_checkout()
})
// ------------checkout------------
When('User into checkout page', async () => {
    await HomePage.open()   
    await HomePage.addItemToCart()
    await CartPage.open()    
    await CartPage.action_cart_checkout()
    // ---------checkout page---------
    await CheckoutPage.open()
    await CheckoutPage.action_checkout()
})

Then('User should be on Checkout: Overview', async () => {
    await OverviewPage.assert_overview()
})
// ------------overview------------
When('User into overview page', async () => {
    await HomePage.open() 
    await HomePage.addItemToCart()
    await CartPage.open() 
    await CartPage.action_cart_checkout()
    await CheckoutPage.open()
    await CheckoutPage.action_checkout()
    // ---------overview page---------
    await OverviewPage.open()
    await OverviewPage.action_overview()
})
Then('User should be on Checkout: Complete!', async () => {
    await completePage.assert_complete()
})
// ------------complete------------
When('User into complete page and go back home', async () => {
    await HomePage.open() 
    await HomePage.addItemToCart()
    await CartPage.open() 
    await CartPage.action_cart_checkout()
    await CheckoutPage.open()
    await CheckoutPage.action_checkout()
    await OverviewPage.open()
    await OverviewPage.action_overview()
    // ---------complete page---------
    await completePage.open()
    await completePage.btngobackhome()
    await HomePage.open()
})
When('User go to logout', async () => {   
    await HomePage.actionbtnLogout()
})
Then('User back to the login page', async () => {
    await LoginPage.open()
    await LoginPage.assert_loginpage()
})








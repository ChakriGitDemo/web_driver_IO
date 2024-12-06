const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')


Given(/^user is on Login page$/, async() => {
    await browser.url("https://the-internet.herokuapp.com/login")
});

When(/^user enters username and password$/, async() => {    
    await $('#username').setValue('tomsmith')
    await $('#password').setValue('SuperSecretPassword!')
});

Then(/^clicks on login button$/, async () => {
    await $('button[type="submit"]').click()
});



Then(/^user is navigated to home page$/, async () => {
    await expect ($('#flash')).toHaveText('You logged into a secure area!')
});
// Then(/^user is navigated to home page$/, async () => {
//     const flashMessage = await $('#flash');
//     await flashMessage.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
//     await expect(flashMessage).toHaveTextContaining('You logged into a secure area!');
// });

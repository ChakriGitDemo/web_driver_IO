const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage=require('../pageobjects/login.page')
const newQuotePage=require("../pageobjects/pages/newQuote.page")
const lineItemsPage=require("../pageobjects/pages/lineItems.page")
//const { expect } = require('chai');
//const { expect } = require('chai');
// const LoginPage = require("../pageobjects/pages/paradiam.page");
// const {expect, $} = require('@wdio/globals')
//const loginPage = require('../pageobjects/login.page');
//const { expect } = require('chai');
//const { expect}=require('chai');



Given(/^user is on login page$/, async() => {
    await loginPage.open()
});

When(/^user eneters username$/, async() => {
    await loginPage.enterUserName()
});

Then(/^user ciccks next button$/, async() => {
    await loginPage.nextButton()
});

When(/^user enters  password$/,async () => {
    await loginPage.enterPassword()
});


Then(/^user clicks signin button$/, async() => {
    await loginPage.signInButton()
});

Then(/^user navigated to next page$/, async() => {
 await browser.url("https://am-webcp-test.myparadigmcloud.com/")
 
});

Then(/^user should see new quote button$/,async()=>{
    
    await newQuotePage.newQuoteButtonFunction()
   
 })

Then(/^user clicks the new quote button$/,async()=>{
    await newQuotePage.newQuoteButtonClickFunction()
})

When(/^user fill quote name$/,async()=>{
    await newQuotePage.quoteNameInputFunction()
})


Then(/^user click select a client button$/, async()=>{
    await newQuotePage.clientButtonFunction()
    
})
    
When(/^user place client name$/, async()=>{
    await newQuotePage.clientNameClickFunction()
    await newQuotePage.clientNameInputFunction()
    await browser.pause(5000)
    
})

Then(/^user select the client$/, async()=>{
    await newQuotePage.userSelectClientsFunction()
   
})

Then(/^user click on create button$/, async()=>{
        await newQuotePage.createButtonFunction()
      
 })


Then(/^user validate the quote order message$/, async () => {
    await browser.pause(2000);
    
    const text = await newQuotePage.getValidateQuoteOrderMessageFunction();
    console.log("text is", text);  

    if (text && typeof text === 'string') {
        const quoteNumber = text.match(/\d+/)[0];
        console.log("Quote number is", quoteNumber);

        const notificationContent = await expect($('.notification--content')).toBeDisplayed();
        await expect(text).toContain(`Quote ${quoteNumber} added`);
    } else {
        console.error("Failed to fetch valid quote order message");
    }
});

When(/^user clicks the window world repository dropdown$/, async()=>{
    const selectValue=await newQuotePage.windowWorldRepositoryButtonFunction()
    await selectValue.click()
    console.log(await selectValue.getValue())
    await selectValue.selectByIndex(0);
   })


Then(/^user clicks the save button for save the data$/,async()=>{
    await newQuotePage.savebuttonFunction()
    })


Then(/^user clicks the lineitems tab$/, async()=>{
    const lineItemsTab = await lineItemsPage.lineItemsTabFunction()
    await lineItemsTab.waitForDisplayed({ timeout: 5000 });  
    await lineItemsTab.waitForClickable({ timeout: 5000 });  
    await lineItemsTab.click();
    
})


Then(/^user checks the new lineitem button$/, async()=>{
    await lineItemsPage.newLineButtonVisibleFunction()
  })



When(/^user clicks the new lineitem button$/,async()=>{
    await lineItemsPage.newLineButtonClickFunction()
})

Then(/^user select the new mice line$/, async()=>{
    await lineItemsPage.newMiscLineClickFunction()
    await lineItemsPage.newMiscLineFunction()
    })
Then(/^user enter description, dealer price and quantity$/,async()=>{
    await lineItemsPage.descriptionInputFunction()
    await lineItemsPage.dealerPriceInputFunction()
    await lineItemsPage.quantityInputFunction()
    await lineItemsPage.saveDataButtonFunction()
    await browser.pause(5000)

})

// When(/^if user click the submit order button, he should see warning message$/,async()=>{
//    await expect($('#line-items__submit-quote')).toBeDisplayed()
//    await $('#line-items__submit-quote').click()
 
//     await browser.pause(5000)
// //    const button=($("#dialogTitle-435"))
// //    await browser.pause(2000)
// //    await expect($("//div[@class='top-right']//div[@id='dialogTitle-5649']")).toContain("User initials are required for this quote. Please complete the Supply Center Information form.");
//     await expect ($("//div[text()='User initials are required for this quote. Please complete the Supply Center Information form.']")).toBeDisplayed()
// })
// Then(/^click on actions and select the 'supply center information' option$/, async () => {
//     await expect($('#actionsButtonGroup')).toBeDisplayed();
//     await $('#actionsButtonGroup').click();
//     const dropdownItem = await $('//*[@id="quote-actions-app"]/div/div[1]/div/ul/button[3]/span');
//     await dropdownItem.waitForDisplayed({ timeout: 5000 });
//      await dropdownItem.click();
     
// });

// When(/^user fill the list of details$/, async()=>{
//     await $("//input[@name='Install']").click()
//     await $("//input[@name='GivenBy']").setValue("tst")
//     await $("//input[@name='Initials']").setValue("tst")
//     await $("//input[@name='AuthorizationNumber']").setValue("tst")
//     await $("//input[@name='MeasureBy']").setValue("tst")
//     await $("//input[@name='CashDeposit']").setValue("2")
//     await $("//input[@name='AdditionalAmount']").setValue("4")
//     await $("(//input[@name='ISSOrder'])[1]").click()
//     await $("//input[@name='CheckDeposit']").setValue("1")
//     await $("//input[@name='InternalPONumber']").setValue("3")
//     await $("//input[@name='Phone']").setValue("5")
   
// })
// Then(/^user click on save button$/,async()=>{
//     await $("//button[text()='Save']").click()
// })
 
// Then(/^user clicks on submit order button$/,async()=>{
//     await $("#line-items__submit-quote").click()
//     await browser.pause()
// })
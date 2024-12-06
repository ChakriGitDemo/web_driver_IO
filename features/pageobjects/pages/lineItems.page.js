const lineItemsDetails = require("../../../data/lineItemsDetails.json")
class lineItems{
     get lineItemsTab(){
        return $('#quote-tabs_line-items')
     }
     get newLineButton(){
        return $('//div[contains(@class,"order-1")]')
     }
     get newMiscLineClick(){
      return $("//button[contains(@class,'btn dropdown-toggle dropdown-toggle-split btn-success')]")
     }
     get newMiscLine(){
        return $('//ul[@class="dropdown-menu show"]//button[@class="dropdown-item"]')
     }
     get descriptionInput(){
        return $('#Description')
     }
     get dealerPriceInput(){
        return $('//input[@name="DealerPrice"]')
     }
     get quantityInput(){
        return $("//input[@name='Quantity']")
     }
     get saveDataButton(){
        return $("(//button[@class='btn btn-primary'])[3]")
     }

     async lineItemsTabFunction(){
      return await  this.lineItemsTab
     }
     async newLineButtonVisibleFunction(){
      const button = await this.newLineButton;  
      await button.waitForDisplayed({ timeout: 5000 });  
      await expect(button).toBeDisplayed(); 
    
     }
     async newLineButtonClickFunction(){
      const button = await this.newLineButton; 
      await button.waitForDisplayed({ timeout: 5000 });  // wait for the element to be visible
      await button.waitForClickable({ timeout: 5000 });  // wait for the element to be clickable
      await element.click();
 
      await button.click() 
     }
     async newMiscLineClickFunction(){
      const button = await this.newMiscLineClick
      await button.waitForDisplayed({timeout:4000})
      await button.click()
      
     }
     async newMiscLineFunction(){
      await this.newMiscLine.waitForDisplayed({ timeout: 5000 });
      await this.newMiscLine.click()
     }
     async descriptionInputFunction(){
      await this.descriptionInput.setValue(lineItemsDetails.description)
     }
     async dealerPriceInputFunction(){
      await this.dealerPriceInput.setValue(lineItemsDetails.dealerPrice)
     }

     async quantityInputFunction(){
      await this.quantityInput.setValue(lineItemsDetails.quantity)
     }
     async saveDataButtonFunction(){
      await this.saveDataButton.click()
     }
}
module.exports= new lineItems()
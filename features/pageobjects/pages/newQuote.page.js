const quoteDetails= require("../../../data/quoteDetails.json")

class newQuotePage{
    get newQuoteButton(){
        return $('#secondary_navbar__newQuote')
    }
    get  quoteNameInput(){
        return $('input[name="QuoteName"]')
    }
    get clientButton(){
        return $('//button[span[text()="Select a client"]]')
    }
    get clientNameInput(){
        return $('input[placeholder="Search by client name or number"]')
    }
    get userSelectClients(){
        return $('.user-actionable')
    }
    get createButton(){
        return $('button[type="submit"]')
    }
    get getValidateQuoteOrderMessage(){
        return $("(//div[@class='notifications']//div)[2]")
    }
    get windowWorldRepositoryButton(){
        return $('#salesrep')
    }
    get savebutton(){
        return $('//button[span[text()="Save"]]')
    }

    async newQuoteButtonFunction() {
        const button = await this.newQuoteButton;  
        await button.waitForDisplayed({ timeout: 5000 });  
        await expect(button).toBeDisplayed();  
    }

    
    async newQuoteButtonClickFunction() {
        const button = await this.newQuoteButton
        await button.click(); 
        
    }

    async quoteNameInputFunction(){
        await  this.quoteNameInput.setValue(quoteDetails.quoteName)
    }
    async clientButtonFunction(){
        await this.clientButton.click()
    }
    async clientNameClickFunction(){
        await this.clientNameInput.click()
    }
    async clientNameInputFunction(){
        await this.clientNameInput.setValue(quoteDetails.clientName)
    }
    async userSelectClientsFunction(){
        await this.userSelectClients.click()
    }
    async createButtonFunction(){
        await this.createButton.click()
    }
    async getValidateQuoteOrderMessageFunction(){
        await this.getValidateQuoteOrderMessage.getText()
    }
    async windowWorldRepositoryButtonFunction(){
       return await this.windowWorldRepositoryButton
        }
    async savebuttonFunction(){
        await this.savebutton.click()
    }
}
module.exports=new newQuotePage()
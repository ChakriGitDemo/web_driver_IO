const data= require("../../data/loginDetails.json")
class loginPage{
    get userNameInput(){
        return $('#username')
    }
    get btnNext(){
        return $('//button[span[text()="Next"]]')
    }
    get userPasswordInput(){
        return $('#password')
    }
    get btnSignIn(){
        return $('//button[span[text()="Sign In"]]')
    }

    async open() {
        await browser.url('https://am-webcp-test.myparadigmcloud.com/login');
    }

    async enterUserName(){
        await this.userNameInput.setValue(data.username)
    }
    async nextButton(){
        await this.btnNext.click()
    }
    async enterPassword(){
        await this.userPasswordInput.setValue(data.password)
    }
    async signInButton(){
        await this.btnSignIn.click()
    }
}
module.exports= new loginPage()
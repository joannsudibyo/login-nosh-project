class loginPage {

    usernameInput = `#username`
    passwordInput = `#password`
    buttonLogin = `button[type="submit"]`
    errorMessage = `.alert.error`

    verifyLogin(uname,pass){
        cy.get(this.usernameInput).type(uname)
        cy.get(this.passwordInput).type(pass)
        cy.get(this.buttonLogin).click()

    }

    getErrorMessage(){
        return cy.get(this.errorMessage)
    }


}

export default loginPage
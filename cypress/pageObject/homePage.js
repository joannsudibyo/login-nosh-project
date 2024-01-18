class homePage {

    loginButton = `li [href="/subscriptions/#login"]`

    buttonLogin(){
        cy.get(this.loginButton).click()
    }

}

export default homePage
/// <reference types = "Cypress" />

import loginPage from "../../pageObject/loginPage";
import homePage from "../../pageObject/homePage";

describe ("test the login page", () => {

  const login = new loginPage()
  const home = new homePage ()
  const uname = Cypress.env('email')
  const pass = Cypress.env('password')

  beforeEach(() => {
    cy.visit('')
    cy.fixture('incorrect-login.json').as('incorrectLogin')
  })  

  // it('logins successfully with a valid login data', () => {
  //     cy.userLogin(uname, pass)
  //   })

  // it('unsuccessfully login with invalid data', function() {
  //   const setData = this.incorrectLogin.invalidLogin
  //   for(var i=0; i<setData.length; i++){
  //     cy.visit('')
  //     const usr = setData[i].email
  //     const pwd = setData[i].password

  //     cy.userLogin(usr,pwd)
  //     login.getErrorMessage().should('have.text', 'ERROR: The username or password you entered is incorrect. Lost your password?')
  //   }    
  // })


  it('unsuccessfully login with empty email', function() {
    const setData = this.incorrectLogin.emptyEmail
    for(var i=0; i<setData.length; i++){
      cy.visit('')
      const usr = setData[i].email
      const pass = setData[i].password
      home.buttonLogin()
      login.verifyLogin(usr,pass)
      login.getErrorMessage().should('have.text', 'Error: The username field is empty.')
    }
  })


  // it('unsuccessfully login with empty password', () => {
  //   cy.get('@incorrectLogin').then((data) => {
  //     cy.log(data)
  //     cy.userLogin(data.emptyPassword.email, data.emptyPassword.password)
  //   })
  //   login.getErrorMessage().should('have.text', 'Error: The password field is empty.')
  // })


}) 
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from "../pageObject/loginPage"
import homePage from "../pageObject/homePage"
import personalDetails from "../pageObject/personalDetails"

const login = new loginPage()
const home = new homePage()
const personal = new personalDetails()

Cypress.Commands.add('userLogin', (uname,pass) => {
    home.buttonLogin()
    login.verifyLogin(uname,pass)
})

Cypress.Commands.add('personalDetailsPage',(uname,pass) => {
    cy.visit('')
    home.buttonLogin()
    login.verifyLogin(uname,pass)
    personal.clickMyAccount()
})
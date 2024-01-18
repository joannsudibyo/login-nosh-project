/// <reference types = "Cypress" />

import personalDetails from "../../pageObject/personalDetails"
import {faker} from "@faker-js/faker"
import 'cypress-file-upload';


const uname = Cypress.env('email')
const pass = Cypress.env('password')

const details = new personalDetails()
const getInputs = details.getInput()
const getEmptyInputs = details.emptyInputs()
const closeModal = details.closeModalPage()

const names = faker.person.firstName()
const number = faker.number.int({ min: 1000000000, max: 9999999999 })

beforeEach(function() {
    cy.personalDetailsPage(uname,pass)
    cy.fixture('personal-detail').as('personDetail')
})

describe("Manage the personal detail page", () => {

    // it('updates the personal details page successfully then verifies them', () => {
    //     details.verifyHeaders().should('have.text', 'Personal Details')
    //     details.updateInputs(names,names,number)
    //     details.successMessage().should('have.text', 'Personal details updated')
    //     cy.wait(200)
    //     getInputs.firstName().should('have.value', names)
    //     getInputs.lastName().should('have.value', names)
    //     getInputs.phone().should('have.value', number)
    // })

    it('updates the details with foreign languages successfully', () => {
        details.verifyHeaders().should('have.text', 'Personal Details')
        cy.get('@personDetail').then((data) => {
            details.updateInputs(data.nonEnglish.chinese, data.nonEnglish.arabic, number)
            getEmptyInputs.updateButton().should('be.enabled').click()
            details.successMessage().should('have.text', 'Personal details updated')
            getInputs.firstName().should('have.value', data.nonEnglish.chinese)
            getInputs.lastName().should('have.value', data.nonEnglish.arabic)
        })
    })


//     it('the button is disabled when either one of or both first and last name input is empty', () => {

//         getEmptyInputs.editButton()
//         getEmptyInputs.emptyFirstName()
//         getEmptyInputs.updateButton().should('be.disabled')
//         getEmptyInputs.emptyLastName()
//         getEmptyInputs.updateButton().should('be.disabled')

//     })


//    it('it shows modal page error when phone number is empty or incorrect', function() {

//             getEmptyInputs.editButton()
//             const setData = this.personDetail.invalidPhoneInput
//             for(var i=0; i<setData.length; i++ ){
//                 const fName= setData[i].firstName
//                 const lName= setData[i].lastName
//                 const pNumber= setData[i].phone

//                 getEmptyInputs.emptyFirstName().type(fName)
//                 getEmptyInputs.emptyLastName().type(lName)
//                 getInputs.phone().clear().type(pNumber)

//                 getEmptyInputs.updateButton().click()
//                 closeModal.modal().should('have.text', 'Please check your phone number is correct.')
//                 closeModal.closeButton().click()

//             }
            


//  })


//     it('it updates the profile photo successfully', function() {
//         getEmptyInputs.editButton()
//         details.uploadFile()

//     })

})
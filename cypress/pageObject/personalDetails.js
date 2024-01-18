class personalDetails {

    buttonAccount = `.account > .details`
    personalHeader = `:nth-child(1) > h6.mb-4 > span`
    personalEdit = `:nth-child(1) > .btn-container > .btn`
    firstNameInput = `#first_name`
    lastNameInput = `#last_name`
    phoneInput = `#phone`
    updateButton = `.btn.btn-form.btn-action`
    successAlert = `.alert`
    modalPage = `.inner > .text`
    close = `.close`
    uploadPhoto = `[id="drop_file_zone"]`
    filePath = 'sample.jpeg'

    clickMyAccount(){
        cy.get(this.buttonAccount).click()
    }

    verifyHeaders(){
     return cy.get(this.personalHeader)
    }

    successMessage(){
        return cy.get(this.successAlert)
    }

    closeModalPage(){
        return {
           modal: () => cy.get(this.modalPage),
           closeButton: () => cy.get(this.close).click()
        } 
    }


    uploadFile() {
        cy.get(this.uploadPhoto).attachFile(this.filePath,{
            encoding: 'utf-8', 
            subjectType: 'drag-n-drop'
        });
      }






    updateInputs(firstName,lastName,phone){
        cy.get(this.personalEdit).click()
        cy.get(this.firstNameInput).clear().type(firstName)
        cy.get(this.lastNameInput).clear().type(lastName)
        cy.get(this.phoneInput).clear({force:true}).type(phone)
        cy.get(this.updateButton).click()
    }


    getInput(){
        return { 
       firstName: () => cy.get(this.firstNameInput),
       lastName: () =>  cy.get(this.lastNameInput),
       phone: () => cy.get(this.phoneInput)
    }
    }  


    emptyInputs(){
        return {
            editButton: () => cy.get(this.personalEdit).click(),
            emptyFirstName: () => cy.get(this.firstNameInput).clear(),
            emptyLastName: () => cy.get(this.lastNameInput).clear(),
            updateButton: () => cy.get(this.updateButton)
        }
    }








 

    

}

export default personalDetails 
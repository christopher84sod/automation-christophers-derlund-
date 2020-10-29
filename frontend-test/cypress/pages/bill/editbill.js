/// <reference types="cypress" />

// Edit Bill
function edit(cy,alldiv,bill,billimgP,editP,edbillP,oldValue,billnew,saveButton){
    cy.get(alldiv).should('contain',bill)
    cy.get(billimgP).click()
    cy.get(editP).click() // Edit
    cy.get(edbillP).should('have.value', oldValue).clear().type(billnew)
    cy.get(saveButton).click()
} 
module.exports = {
    edit
}
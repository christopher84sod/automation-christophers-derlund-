/// <reference types="cypress" />

// Edit Room
function edit(cy,alldiv,room,roomimgP,editP,edroomP,oldroomnr,roomnew,saveButton){
    cy.get(alldiv).should('contain',room)
    cy.get(roomimgP).click()
    cy.get(editP).click() // Edit
    cy.get(edroomP).should('have.value', oldroomnr).clear().type(roomnew)
    cy.get(saveButton).click()
}
module.exports = {
    edit 
}
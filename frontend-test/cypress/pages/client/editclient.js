/// <reference types="cypress" />
// Edit
function edit(cy,alldiv,client,clientimgP,editP,edClientP,newclient,saveButton){ 
    cy.get(alldiv).should('contain',client)
    cy.get(clientimgP).click()
    cy.get(editP).click() 
    cy.get(edClientP).should('have.value', client).clear().type(newclient)
    cy.get(saveButton).click()

} 
module.exports = {
    edit 
}

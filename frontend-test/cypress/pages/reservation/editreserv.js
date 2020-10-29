/// <reference types="cypress" />

function edit(cy,alldiv,newclient,reservimgP,
    editP,edstartP,oldstart,newstart,
    edendP,oldend,newend,saveButton){
    cy.get(alldiv).should('contain',newclient)
    cy.get(reservimgP).click()
    cy.get(editP).click() // Edit */
    cy.get(edstartP).should('have.value', oldstart).clear().type(newstart)
    cy.get(edendP).should('have.value', oldend).clear().type(newend)
    cy.get(saveButton).click()
}
// Export
module.exports = {
     edit
}
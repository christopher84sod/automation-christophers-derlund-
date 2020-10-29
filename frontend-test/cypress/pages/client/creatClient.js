/// <reference types="cypress" />

function creatClient(cy,allPosion,cclientcon,nameLabelP,nameLabel,
    namePosion,name,emailLabelP,emailLabel,emailPosion,email,
    telLabelP,telLabel,telPosion,tel,saveButton ){
    cy.get(allPosion).should('contain',cclientcon)
    // Name
    cy.get(nameLabelP).should('contain',nameLabel)
    cy.get(namePosion).type(name)
    // Email
    cy.get(emailLabelP).should('contain',emailLabel)
    cy.get(emailPosion).type(email)
    // Telephone
    cy.get(telLabelP).should('contain',telLabel)
    cy.get(telPosion).type(tel)
    /// Back Save 
    cy.get(saveButton).click() // Save
    }
module.exports = {
    creatClient
}
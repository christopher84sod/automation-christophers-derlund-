/// <reference types="cypress" />
const allPosion = '#app > :nth-child(2)'
const con = 'New Client'

const namePosion = ':nth-child(1) > input' 
const nameLabelP = ':nth-child(1) > label'
const name = 'Test Testsson'
const nameLabel = 'Name'

const emailPosion = ':nth-child(2) > input'
const emailLabelP = ':nth-child(2) > label'
const email = 'test@testsson.com'
const emailLabel = 'Email'

const telPosion =  ':nth-child(3) > input'
const telLabelP = ':nth-child(3) > label'
const tel = '111 111 1111'
const telLabel = 'Telephone'

const saveButton = '.blue'

function creatClient(cy){
    cy.get(allPosion).should('contain',con)
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
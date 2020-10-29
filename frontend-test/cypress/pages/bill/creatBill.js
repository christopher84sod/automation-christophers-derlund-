/// <reference types="cypress" />
/*
const allPosion = '#app > :nth-child(2)'
const con = 'New Bill'
const valuePosion = 'input' 
const value = '1111'
const paidPosion = '.checkbox'
const saveButton = '.blue' */

function creatBill(cy,allPosion,con,valuePosion,value,paidPosion,saveButton){
    cy.get(allPosion).should('contain',con)
    //cy.contains(con)
    // Value  Sek
    cy.get(valuePosion).type(value)
    // Paid
    cy.get(paidPosion).click()
    cy.get(saveButton).click()
}
module.exports = {
    creatBill
}
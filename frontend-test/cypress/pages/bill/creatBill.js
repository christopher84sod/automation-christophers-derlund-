/// <reference types="cypress" />

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
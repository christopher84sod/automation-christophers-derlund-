/// <reference types="cypress" />

// Function

function goOut(cy,creatbutton,con,goOUTofRoom){
    cy.get(creatbutton).should('contain', con)
    cy.get(goOUTofRoom).click()
}

function goInCreatBill(cy,creatbutton,con){
    cy.get(creatbutton).should('contain', con).click()
}
function deleteBill(cy,alldiv,bill,billimgP ,deleteP){
    cy.get(alldiv).should('contain',bill)
    cy.get(billimgP).click()
    cy.get(deleteP).click() // Delete
    cy.get(alldiv).should('not.contain',bill)
}

// Export
module.exports = {
    goOut,goInCreatBill,deleteBill
}

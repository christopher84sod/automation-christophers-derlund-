/// <reference types="cypress" />

// Element
/*
const goOUTofRoom = 'a.btn:nth-child(1)'
const creatbutton = 'h2 > .btn'
const con = 'Create Bill'
const bill = 'ID: 2'
const alldiv = 'div'
const imgP = ':nth-child(2) > .action'
const deleteP = '.menu > :nth-child(2)'
const editP = '.menu > :nth-child(1)' */
// Edit Room

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

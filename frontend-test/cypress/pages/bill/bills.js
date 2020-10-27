/// <reference types="cypress" />

// Element
const goOUTofRoom = 'a.btn:nth-child(1)'
const creatbutton = 'h2 > .btn'
const con = 'Create Bill'
const bill = 'ID: 2'
const alldiv = 'div'
const imgP = ':nth-child(2) > .action'
const deleteP = '.menu > :nth-child(2)'
const editP = '.menu > :nth-child(1)'
// Edit Room
const oldValue = '1111'
const edbillP = ':nth-child(3) > input'

const billnew = '10000'
const saveButton = '.blue'
// Function
function goOut(cy){
    cy.get(creatbutton).should('contain', con)
    cy.get(goOUTofRoom).click()
}
function goInCreatBill(cy){
    cy.get(creatbutton).should('contain', con).click()
}
function deleteBill(cy){
    cy.get(alldiv).should('contain',bill)
    cy.get(imgP).click()
    cy.get(deleteP).click() // Delete
    cy.get(alldiv).should('not.contain',bill)
}
// Edit Bill
function edit(cy){
    cy.get(alldiv).should('contain',bill)
    cy.get(imgP).click()
    cy.get(editP).click() // Edit
    cy.get(edbillP).should('have.value', oldValue).clear().type(billnew)
    cy.get(saveButton).click()
} 

// Export
module.exports = {
    goOut,goInCreatBill,deleteBill,edit
}
/*

cy.contains('Bills')
cy.get('h2 > .btn').should('contain', 'Create Bill')
cy.get('a.btn:nth-child(1)').click() */
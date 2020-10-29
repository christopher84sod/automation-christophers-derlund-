/// <reference types="cypress" />
// Element
/*
const goOUTofRoom = 'a.btn:nth-child(1)'
const creatbutton = 'h2 > .btn'
const con = 'Create Reservation'
const alldiv = 'div'
const res = 'Test Testsson'
const imgP = ':nth-child(2) > .action > img'
const deleteP = '.menu > :nth-child(2)'
const editP = '.menu > :nth-child(1)'
// Edit Room
const newclient = 'New Name'
const edstartP = ':nth-child(3) > input'
const edendP = ':nth-child(4) > input'
const oldstart = '2020-11-01'
const oldend = '2021-01-22'
const newstart = '2021-04-01'
const newend = '2021-04-04'
const saveButton = '.blue' */
// Function
function goOut(cy,Roomcreatbutton,con,goOUTofRoom){
    cy.get(Roomcreatbutton).should('contain', con)
    cy.get(goOUTofRoom).click()
}
function goToCreatReservaton(cy,creatbutton,con){
    cy.get(creatbutton).should('contain', con).click()
}  
function deleteRes(cy,alldiv,newclient,imgP,deleteP,){
    
    cy.get(alldiv).should('contain',newclient)
    cy.get(imgP).click()
    cy.get(deleteP).click() // Delete
    cy.get(alldiv).should('not.contain',newclient)
}

// Export
module.exports = {
    goOut, goToCreatReservaton, deleteRes
}


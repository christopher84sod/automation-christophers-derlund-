/// <reference types="cypress" />

// Element
const goOUTofRoom = ':nth-child(3) > .btn'
const creatbutton = 'h2 > .btn'
const con = 'Create Room'
const alldiv = 'div'
const room = 'Room 103'
const imgP = 'div.card:nth-child(3) > div:nth-child(3)'
const deleteP = '.menu > :nth-child(2)'
const editP = '.menu > :nth-child(1)'
// Edit Room
const edroomP = ':nth-child(4) > input'
const oldroomnr = '103'
const roomnew = '111'
const saveButton = '.blue'
// Function
function goOut(cy){
    cy.get(creatbutton).should('contain', con)
    cy.get(goOUTofRoom).click()
}
function goInCreatRoom(cy){
    cy.get(creatbutton).should('contain', con).click()
}
function deleteRoom(cy){
    cy.get(alldiv).should('contain',roomnew)
    cy.get(imgP).click()
    cy.get(deleteP).click() // Delete
    cy.get(alldiv).should('not.contain',roomnew)
} 
// Edit Room
function edit(cy){
    cy.get(alldiv).should('contain',room)
    cy.get(imgP).click()
    cy.get(editP).click() // Edit
    cy.get(edroomP).should('have.value', oldroomnr).clear().type(roomnew)
    cy.get(saveButton).click()
}

// Export
module.exports = {
    goOut, goInCreatRoom,deleteRoom, edit 
}
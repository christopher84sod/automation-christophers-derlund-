/// <reference types="cypress" />

// Function
function goOut(cy,Roomcreatbutton,con,goOUTofRoom){
    cy.get(Roomcreatbutton).should('contain', con)
    cy.get(goOUTofRoom).click()
}
function goInCreatRoom(cy,creatbutton,con){
    cy.get(creatbutton).should('contain', con).click()
}
function deleteRoom(cy,alldiv,roomnew,roomimgP ,deleteP){
    cy.get(alldiv).should('contain',roomnew)
    cy.get(roomimgP).click()
    cy.get(deleteP).click() // Delete
    cy.get(alldiv).should('not.contain',roomnew)
} 
function checkIfCreated(cy,number){
    cy.contains(number)
} 
// Export
module.exports = {
    goOut, goInCreatRoom,deleteRoom,checkIfCreated 
}
/// <reference types="cypress" />
// Action / Functions
function preformLogIn(cy,home,userNamePosition,userName,userPasswordsPosition,userPasswords,
    indexLoginButton,indexTitle,dashuserNamePosition){
    cy.visit(home)
    checkTitle(cy,indexTitle)
    cy.get(userNamePosition).type(userName)
    cy.get(userPasswordsPosition).type(userPasswords)
    cy.get(indexLoginButton).click()
    checkUser(cy,dashuserNamePosition,userName)
}
function checkTitle(cy,indexTitle){
   cy.title().should('eq', indexTitle)
}
function checkUser(cy,dashuserNamePosition,userName){
    cy.get(dashuserNamePosition).should('contain',userName)
} 
// Exports
module.exports = {
    preformLogIn,checkTitle,checkUser
    }

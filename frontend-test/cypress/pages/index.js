/// <reference types="cypress" />

// Elements
const home = 'http://localhost:3000/' 
const userName = 'tester01'
const userPasswords = 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c'
const userNamePosition =':nth-child(1) > input'
const userPasswordsPosition = ':nth-child(2) > input'
const indexTitle = 'Testers Hotel'
const indexLoginButton ='.btn'
const dashuserNamePosition = '.username'


// Action / Functions
function preformLogIn(cy){
    cy.visit(home)
    checkTitle(cy)
    cy.get(userNamePosition).type(userName)
    cy.get(userPasswordsPosition).type(userPasswords)
    cy.get(indexLoginButton).click()
    checkUser(cy)
}
function checkTitle(cy){
   cy.title().should('eq', indexTitle)
}
function checkUser(cy){
    cy.get(dashuserNamePosition).should('contain',userName)
} 
// Exports
module.exports = {
    preformLogIn,checkTitle,checkUser
    }
/* ****  PSUDO COD
            *** Loga in ut ***
     gå till localhost3000
      kolla title
   skriv in namn
skriv in lösenord
tryck "loga in"
kolla username
klick loga ut
kolla title */
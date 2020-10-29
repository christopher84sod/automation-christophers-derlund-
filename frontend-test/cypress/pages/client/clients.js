/// <reference types="cypress" />

// Function
function goOut(cy,creatbutton,con,goOUTofRoom){
    cy.get(creatbutton).should('contain', con)
    cy.get(goOUTofRoom).click()
}
function goInCreatClient(cy,creatbutton,con){
    cy.get(creatbutton).should('contain', con).click()
}

function deleteClient(cy,alldiv,newclient,clientimgP,deleteP){
    cy.get(alldiv).should('contain',newclient)
    cy.get(clientimgP).click()
    cy.get(deleteP).click() // Delete
    cy.get(alldiv).should('not.contain',newclient)
}

module.exports = {
    goOut,goInCreatClient
    ,deleteClient
}


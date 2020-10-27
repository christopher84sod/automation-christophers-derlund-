/// <reference types="cypress" />

// Element
const goOUTofRoom = 'a.btn:nth-child(1)'
const creatbutton = 'h2 > .btn'
const con = 'Create Client'
const client = 'Test Testsson'
const alldiv = 'div'
const imgP = 'div.card:nth-child(3) > div:nth-child(3)'
const deleteP = '.menu > :nth-child(2)'
// Edit Client
const editP = '.menu > :nth-child(1)'
const edClientP = ':nth-child(3) > input'
const saveButton = '.blue'
const newclient = 'New Name'
// Function
function goOut(cy){
    cy.get(creatbutton).should('contain', con)
    cy.get(goOUTofRoom).click()
}
function goToCreatClient(cy){
    cy.get(creatbutton).should('contain', con).click()
}
function deleteClient(cy){
    cy.get(alldiv).should('contain',newclient)
    cy.get(imgP).click()
    cy.get(deleteP).click() // Delete
    cy.get(alldiv).should('not.contain',newclient)
}
// Edit
function edit(cy){ 
    cy.get(alldiv).should('contain',client)
    cy.get(imgP).click()
    cy.get(editP).click() 
    cy.get(edClientP).should('have.value', client).clear().type(newclient)
    cy.get(saveButton).click()

} 

module.exports = {
    goOut, goToCreatClient,deleteClient, edit 
}

/*
cy.contains('Clients')
    cy.get('h2 > .btn').should('contain', 'Create Client')
    cy.get('a.btn:nth-child(1)').click()
    cy.contains('Tester Hotel Overview') */
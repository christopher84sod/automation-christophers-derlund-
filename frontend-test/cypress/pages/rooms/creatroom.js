/// <reference types="cypress" />

// Element
const categoryPosion = ':nth-child(1) > select'
const category = 'Twin'
const numberPosion = ':nth-child(2) > input'
const number = '103'
const floorPosion = ':nth-child(3) > input'
const floor = '5'
const availablePosion = '.checkbox'
const pricePosion = ':nth-child(5) > input'
const price = '5000'
const featuresPosion = ':nth-child(6) > select'
const features = ['ensuite', 'sea_view' ]
const saveButton = '.blue'
function creatRoom(cy){
    ///Room Creat New
    
   // cy.get(con).click() 
        // Category  
        cy.get(categoryPosion).select(category)
        //  cy.get(categoryPosion).select('Single')
        //  cy.get(categoryPosion).select('Double')
        //  Number
            cy.get(numberPosion).type(number)  
       //  Floor
           cy.get(floorPosion).type(floor)
           //  Available
            cy.get(availablePosion).click()
            //  Price
            cy.get(pricePosion).type(price)
            // Features: penthouse ensuite  balcony sea_view 
            cy.get(featuresPosion).type('{ctrl}').select(features)
            /// Creat room 
            cy.get(saveButton).click()
}
function checkIfCreated(cy){
    cy.contains(number)
} 

module.exports = {
creatRoom,checkIfCreated 
}
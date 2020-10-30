/// <reference types="cypress" />
import * as index from '../pages/index.js'

function Logout(cy,dashLogOutPosition,indexTitle){
    cy.get(dashLogOutPosition).click()
    index.checkTitle(cy,indexTitle)
    }
function goToARooms(cy,buttonP,verification){ 
    cy.get(buttonP).should('contain',verification).click()
}

// Exports
module.exports = {
    Logout,goToARooms
}
/// <reference types="cypress" />
import * as index from '../pages/index.js'
// Elements
const dashLogOutPosition = '.user > .btn'
const roomButton = ':nth-child(1) > .btn' 
const billButton = 'div.block:nth-child(3) > a:nth-child(4)'
const clientButton = 'div.block:nth-child(2) > a:nth-child(3)'
const reservationButton = 'div.block:nth-child(4) > a:nth-child(4)'
const verification = 'View'

// Action / Functions

function Logout(cy){
    cy.get(dashLogOutPosition).click()
    index.checkTitle(cy)
    }
function goToARooms(cy,buttonP,verification){ 
    cy.get(buttonP).should('contain',verification).click()
}
function goToRoom(cy){
    goToARooms(cy,roomButton,verification)
}
function goToBills(cy){
    goToARooms(cy,billButton,verification)
}
function goToClient(cy){
    goToARooms(cy,clientButton,verification)
}
function goToReservation(cy){
    goToARooms(cy,reservationButton,verification)
}

// Exports
module.exports = {
    Logout,goToRoom,goToBills,goToClient,goToReservation
}
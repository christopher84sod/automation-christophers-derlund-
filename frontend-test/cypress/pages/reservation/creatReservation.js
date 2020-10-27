/// <reference types="cypress" />
const allPosion = '#app > :nth-child(2)'
const con = 'New Reservation'
const startPosion = ':nth-child(1) > input' 
const startLabelP = ':nth-child(1) > label'
const start = '2020-11-01'
const startLabel = 'Start (Format YYYY-MM-DD)'
const endPosion = ':nth-child(2) > input'
const endLabelP = ':nth-child(2) > label'
const end = '2021-01-22'
const endLabel = 'End (Format YYYY-MM-DD)'
const clientPosion = ':nth-child(3) > select' 
const clientLabelP = ':nth-child(3) > label'
const client =   'Test Testsson (#3)'
const clientLabel = 'Client'
const roomPosion =  ':nth-child(4) > select'
const roomLabelP = ':nth-child(4) > label'
const room =      'Floor 5, Room 103'  
const roomLabel =  'Room'
const idPosion =  ':nth-child(5) > select'
const idLabelP = ':nth-child(5) > label'
const id = 'ID: 2'
const idLabel = 'Bill'
const saveButton = '.blue'

function creatReservation(cy){      
cy.get(allPosion).should('contain',con)
       // cy.contains('New Reservation')
        // Creat reservation cy.get('h2 > .btn')
        // Start (Format YYYY-MM-DD)
            cy.get(startLabelP).should('contain',startLabel)
            cy.get(startPosion).type(start)
        // End (Format YYYY-MM-DD)
            cy.get(endLabelP).should('contain',endLabel)
            cy.get(endPosion).type(end)
        // Client Förnamn Efternamn
            cy.get(clientLabelP).should('contain',clientLabel)
            cy.get(clientPosion).select(client)
        // Room  "Floor 1, Room 102" RummNr 
            cy.get(roomLabelP).should('contain',roomLabel)
            cy.get(roomPosion).select(room)
        // Bill "ID: 2" 
            cy.get(idLabelP).should('contain',idLabel)
            cy.get(idPosion).select(id)
        // Back Save 
        //cy.get('[href="/reservations"]').click()   
            cy.get(saveButton).click() 
        }

        module.exports = {
            creatReservation
        }
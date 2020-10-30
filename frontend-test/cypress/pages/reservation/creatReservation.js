/// <reference types="cypress" />

function creatReservation(cy,allPosion,cresvverification,
    startLabelP,startLabel,startPosion,start,
    endLabelP,endLabel,endPosion,end,
    clientLabelP,clientLabel,clientPosion,client,
    roomLabelP,roomLabel,roomPosion,room,
    idLabelP,idLabel,idPosion,id,
    saveButton){      
cy.get(allPosion).should('contain',cresvverification)
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
            cy.get(saveButton).click() 
        }

        module.exports = {
            creatReservation
        }
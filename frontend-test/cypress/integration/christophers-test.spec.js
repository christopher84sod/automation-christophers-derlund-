/// <reference types="cypress" />

/// Test Suit
describe('Test Suit01', function(){

    /// Test Cases
        it('Logain Logaut', function(){
            cy.visit('http://localhost:3000/')
            cy.title().should('eq', 'Testers Hotel')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.contains('Tester Hotel Overview')
            cy.get('.username').should('contain','tester01')
            cy.get('.user > .btn').click()
            cy.title().should('include', 'Hotel')
                }) 
    /// Explore the Site            
        it('Explore the Site ', function(){
            // Logar in
            cy.visit('http://localhost:3000/')
            cy.title().should('eq', 'Testers Hotel')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            // Gå In och ut i alla rum
            // Rooms 
            cy.contains('Rooms')
            cy.get(':nth-child(1) > .btn').should('contain','View').click()
            cy.contains('Rooms')
            cy.get('h2 > .btn').should('contain', 'Create Room')
            cy.get(':nth-child(3) > .btn').click()
            cy.contains('Tester Hotel Overview')
            // Bills
            cy.get('div.block:nth-child(3) > a:nth-child(4)').click()
            cy.contains('Bills')
            cy.get('h2 > .btn').should('contain', 'Create Bill')
            cy.get('a.btn:nth-child(1)').click()
            cy.contains('Tester Hotel Overview') 
            // Clients    
            cy.get('div.block:nth-child(2) > a:nth-child(3)').click()
            cy.contains('Clients')
            cy.get('h2 > .btn').should('contain', 'Create Client')
            cy.get('a.btn:nth-child(1)').click()
            cy.contains('Tester Hotel Overview')
            // Reservation    
            cy.get('div.block:nth-child(4) > a:nth-child(4)').click()
            cy.contains('Reservation')
            cy.get('h2 > .btn').should('contain', 'Create Reservation')
            cy.get('a.btn:nth-child(1)').click()
            cy.contains('Tester Hotel Overview')
            // Logar Ut
            cy.get('.user > .btn').click()
            cy.title().should('include', 'Hotel')
        })  
    ///  Skapa Lägenhet   
        it('Create Room ', function(){
            // Logat in
            cy.visit('http://localhost:3000/')
            cy.title().should('eq', 'Testers Hotel')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click() 
            // Går in i "Creat rooms"
            cy.contains('Rooms')
            cy.get(':nth-child(1) > .btn').click()
            cy.contains('Rooms')
            cy.get('h2 > .btn').click()
        ///Room Creat New      
            // Category  
            cy.get(':nth-child(1) > select').select('Twin')
                //  cy.get(':nth-child(1) > select').select('Single')
                //  cy.get(':nth-child(1) > select').select('Double')
            //  Number
            cy.get(':nth-child(2) > input').type('103')  

            //  Floor
            cy.get(':nth-child(3) > input').type('5')
            //  Available
            cy.get('.checkbox').click()
            //  Price
            cy.get(':nth-child(5) > input').type('5000')
            // Features: penthouse ensuite  balcony sea_view 
            cy.get(':nth-child(6) > select').type('{ctrl}').select(['ensuite', 'sea_view' ])
            /// Creat room 
            cy.get('.blue').click()
           // cy.get('[href="/rooms"]').click() // Back  
           // Cheak if it been created
            cy.contains('Room 103')
            // Loga ut 
            cy.get(':nth-child(3) > .btn').click()
            cy.contains('Tester Hotel Overview')
            cy.get('.user > .btn').click()
            cy.title().should('include', 'Hotel')
     }) 
    
    ////  ***** Bills     
        it('Create Bill ', function(){
            // Logain
            cy.visit('http://localhost:3000/')
            cy.title().should('eq', 'Testers Hotel')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.contains('Bills')
            // New Bill
            cy.get(':nth-child(3) > .btn').click()
            cy.contains('Bills')
            cy.get('h2 > .btn').click()
            cy.contains('New Bill')
            // Value  Sek
            cy.get('input').type('1111')
            // Paid
            cy.get('.checkbox').click()
            cy.get('.blue').click()
            // Ut ur Bills
            // cy.get('[href="/bills"]').click() // Back
            cy.contains('ID')
            // Loga ut
            cy.get('.user > .btn').click()
                   
        }) 
   ////  *****   New Client
        it('Create Client ', function(){
            cy.visit('http://localhost:3000/')
            cy.title().should('eq', 'Testers Hotel')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.contains('Reservations')
            cy.get('.blocks > :nth-child(2) > .btn').click()
            cy.get('h2 > .btn').click()
            // Name
            cy.get(':nth-child(1) > label').contains('Name')
            cy.get(':nth-child(1) > input').type('Test Testsson')
            // Email
            cy.get(':nth-child(2) > label').contains('Email' )
            cy.get(':nth-child(2) > input').type('test@testsson.com')
            // Telephone
            cy.get(':nth-child(3) > label').contains('Telephone')
            cy.get(':nth-child(3) > input').type('111 111 1111')
            /// Back Save 
            //cy.get('[href="/clients"]').click()  // Back
            cy.get('.blue').click() // Save
            cy.contains('Test Testsson')
            // Loga ut  
            cy.get('.user > .btn').click()
                   
        }) 
        
        ////  *****   Reservations
        it('Create reservation ', function(){
        // Logar in
            cy.visit('http://localhost:3000/')
            cy.title().should('eq', 'Testers Hotel')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.contains('Tester Hotel Overview')
         // Går in till Reservation       
            cy.get(':nth-child(4) > .btn').click()
            cy.contains('Reservations')
            cy.get('h2 > .btn').click()
            cy.contains('New Reservation')
        // Creat reservation cy.get('h2 > .btn')
        // Start (Format YYYY-MM-DD)
            cy.get(':nth-child(1) > label').contains('Start (Format YYYY-MM-DD)')
            cy.get(':nth-child(1) > input').type('2020-11-01')
        // End (Format YYYY-MM-DD)
            cy.get(':nth-child(2) > label').contains('End (Format YYYY-MM-DD)')
            cy.get(':nth-child(2) > input').type('2021-01-22')
        // Client Förnamn Efternamn
            cy.get(':nth-child(3) > label').contains('Client')
            cy.get(':nth-child(3) > select').select('Test Testsson (#3)')
        // Room  "Floor 1, Room 102" RummNr 
            cy.get(':nth-child(4) > label').contains('Room')
            cy.get(':nth-child(4) > select').select('Floor 5, Room 103')
        // Bill "ID: 2" 
            cy.get(':nth-child(5) > label').contains('Bill')
            cy.get(':nth-child(5) > select').select('ID: 2')
        // Back Save 
        //cy.get('[href="/reservations"]').click()   
            cy.get('.blue').click() 
            cy.get('.user > .btn').click()

                   
        })
    /// *** Ändra alla
        it('Edit all', function(){
            // Logar in
            cy.visit('http://localhost:3000/')
            cy.title().should('eq', 'Testers Hotel')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            // Edit Room
            cy.contains('Rooms')
            cy.get(':nth-child(1) > .btn').click()
            cy.contains('Rooms')
            cy.get(':nth-child(1) > .action').click()
            cy.get('.menu > :nth-child(1)').click() // Edit
            cy.get(':nth-child(4) > input').should('have.value', '101').clear().type('111')
            cy.get('.blue').click()
            // Edit Client
            cy.visit('http://localhost:3000/clients')
            cy.get(':nth-child(1) > .action').click()
            cy.get('.menu > :nth-child(1)').click() // Edit
            cy.get(':nth-child(3) > input').should('have.value', 'Jonas Hellman').clear().type('New Name')
            cy.get('.blue').click()
            // Edit Bill
            cy.visit('http://localhost:3000/bills')
            cy.get(':nth-child(1) > .action').click()
            cy.get('.menu > :nth-child(1)').click() // Edit
            cy.get(':nth-child(3) > input').should('have.value', '4500').clear().type('10000')
            cy.get('.blue').click()
            // Edit Reservation
            cy.visit('http://localhost:3000/reservations')
            cy.get(':nth-child(1) > .action').click()
            cy.get('.menu > :nth-child(1)').click() // Edit */
            cy.get(':nth-child(3) > input').should('have.value', '2020-04-01').clear().type('2021-04-01')
            cy.get(':nth-child(4) > input').should('have.value', '2020-04-04').clear().type('2021-04-04')
            cy.get('.blue').click()
            // Controll Changes
            cy.get(':nth-child(1) > .id').should('contain', '1')
            cy.get(':nth-child(1) > .start').should('contain', '2021-04-01')
            cy.get(':nth-child(1) > .end').should('contain', '2021-04-04')
            cy.get(':nth-child(1) > .client').should('contain', '1')
            cy.get(':nth-child(1) > .room').should('contain', '1')
            cy.get(':nth-child(1) > .bill').should('contain', 'Bill: 1') 
            // Loga ut
            cy.get('.user > .btn').click()
            cy.contains('Tester Hotel')
        
})
        
   
    /// *** Delete Skappat ärende 
        it('Delete',function(){
        // Logar in
            cy.visit('http://localhost:3000/')
            cy.title().should('eq', 'Testers Hotel')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.contains('Tester Hotel Overview')
            // Delete Reservation
            // Går in
            cy.get('div.block:nth-child(4) > a:nth-child(4)').click()
            cy.contains('Reservation')
            cy.get('div').should('contain','Test Testsson')
            cy.get(':nth-child(2) > .action > img').click()
            cy.get('.menu > :nth-child(2)').click() // Delete
            cy.get('div').should('not.contain','Test Testsson')
            // Går tillbaka
            cy.get(':nth-child(3) > .btn').click() 
            cy.contains('Tester Hotel Overview') 
            
            // Delet Client
            // Går in 
            cy.get('div.block:nth-child(2) > a:nth-child(3)').click() 
            cy.contains('Clients')
            cy.get('div').should('contain','Test Testsson')
            cy.get('div.card:nth-child(3) > div:nth-child(3)').click()
            cy.get('.menu > :nth-child(2)').click() // Delete
            cy.get('div').should('not.contain','Test Testsson')
            // Går ut ur rum
            cy.get('a.btn:nth-child(1)').click()
            cy.contains('Tester Hotel Overview')
   
            // Delete Bill
            // Gå in i Bills
            cy.get('div.block:nth-child(3) > a:nth-child(4)').click()
            cy.contains('Bills')
            cy.get('div').should('contain','ID: 2')
            cy.get(':nth-child(2) > .action').click()
            cy.get('.menu > :nth-child(2)').click() // Delete
            cy.get('div').should('not.contain','ID: 2')
            // Gå ut ur Bill
            cy.get('a.btn:nth-child(1)').click()
            cy.contains('Tester Hotel Overview')   
    
            // Delete Room
            cy.contains('Tester Hotel Overview')
            cy.get(':nth-child(1) > .btn').click()
            cy.contains('Rooms')
            cy.get('div').should('contain','Room 103')
            cy.get('div.card:nth-child(3) > div:nth-child(3)').click()
            cy.get('.menu > :nth-child(2)').click() // Delete
            cy.get('div').should('not.contain','Room 103')
            // Loga ut
            cy.get('.user > .btn').click()
            cy.contains('Tester Hotel')
            
    })

})


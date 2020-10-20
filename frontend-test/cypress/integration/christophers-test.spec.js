/// <reference types="cypress" />

/// Test Suit
describe('Test Suit01', function(){
        /// Test Cases
        it('Test case 1', function(){
            cy.visit('http://localhost:3000/')
            cy.get(':nth-child(1) > input').type('tester01')
            cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
            cy.get('.btn').click()
            cy.contains('Tester Hotel Overview')
        })


})


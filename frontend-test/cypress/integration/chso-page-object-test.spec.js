/// <reference types="cypress" />
import * as dash from '../pages/dash.js'
import * as index from '../pages/index.js'
import * as room from '../pages/rooms/rooms.js'
import * as croom from '../pages/rooms/creatroom.js'
import * as bill from '../pages/bill/bills.js'
import * as cbill from '../pages/bill/creatBill.js'
import * as clients from '../pages/client/clients.js'
import * as cclient from '../pages/client/creatClient.js'
import * as reserv from '../pages/reservation/reservation.js'
import * as creserv from '../pages/reservation/creatReservation.js'



/// Test Suit
describe('Test Suit01', function(){
    /// Test Cases
        it('Logain Logaut', function(){
            index.preformLogIn(cy)
            dash.Logout(cy)          
               }) 
     ///  Undersök sidan      
        it('Explore the Site', function(){
            index.preformLogIn(cy)
            dash.goToRoom(cy)
            room.goOut(cy)
            dash.goToBills(cy)
            bill.goOut(cy)    
            dash.goToClient(cy)
            clients.goOut(cy)
            dash.goToReservation(cy) 
            reserv.goOut(cy)
            dash.Logout(cy)    
                   })  
            ///  Skapa Lägenhet   
        it('Create Room ', function(){
            index.preformLogIn(cy) // Logat in
            dash.goToRoom(cy) 
            room.goInCreatRoom(cy) // Går in i "Creat rooms"
            croom.creatRoom(cy) 
            croom.checkIfCreated(cy)
            dash.Logout(cy) // Loga ut
        }) 
    ////  ***** Bills     
     it('Create Bill ', function(){
            index.preformLogIn(cy)
            dash.goToBills(cy)
            bill.goInCreatBill(cy)
            cbill.creatBill(cy) // New Bill  
            bill.goOut(cy) // Ut ur Bills
            dash.Logout(cy) // Loga ut
            })
     //// Creat Client       
        it('Create Client ', function(){
            index.preformLogIn(cy)
            dash.goToClient(cy)
            clients.goToCreatClient(cy)
            cclient.creatClient(cy)              
            clients.goOut(cy)
            dash.Logout(cy)
            })
  ////  *****   Reservations
        it('Create reservation ', function(){
            index.preformLogIn(cy) // Logar in      
            dash.goToReservation(cy)   // Går in till Reservation 
            reserv.goToCreatReservaton(cy) // Gå till Skapa res
            creserv.creatReservation(cy)   // skapa reservation
            reserv.goOut(cy) // gå till Dash
            dash.Logout(cy) 
    })
/// *** Ändra alla
        it('Edit all', function(){
            index.preformLogIn(cy) // Logar in
            dash.goToRoom(cy)
            room.edit(cy)
            room.goOut(cy)
            dash.goToBills(cy)
            bill.edit(cy)
            bill.goOut(cy)
            dash.goToClient(cy)
            clients.edit(cy)
            clients.goOut(cy)
            dash.goToReservation(cy)
            reserv.edit(cy)
            reserv.goOut(cy)
            dash.Logout(cy)
        })

    /// *** Delete Skappat ärende 
        it('Delete',function(){
            index.preformLogIn(cy) // LogaIn
            dash.goToReservation(cy) // Gå in i reservation
            reserv.deleteRes(cy) // Delete Reservation
            reserv.goOut(cy) // Till dashboard
            dash.goToBills(cy)
            bill.deleteBill(cy)
            bill.goOut(cy)
            dash.goToClient(cy)
            clients.deleteClient(cy) // Delet Client
            clients.goOut(cy)
            dash.goToRoom(cy)
            room.deleteRoom(cy)
            room.goOut(cy)
            dash.Logout(cy)  // Loga ut
            })
        

        })
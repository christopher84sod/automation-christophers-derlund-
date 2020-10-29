/// <reference types="cypress" />
import * as target from '../pages/targets/target.js'
import * as dash from '../pages/dash.js'
import * as index from '../pages/index.js'
import * as room from '../pages/rooms/rooms.js'
import * as croom from '../pages/rooms/creatroom.js'
import * as eroom from '../pages/rooms/editRoom.js'
import * as bill from '../pages/bill/bills.js'
import * as cbill from '../pages/bill/creatBill.js'
import * as ebill from '../pages/bill/editbill.js'
import * as clients from '../pages/client/clients.js'
import * as cclient from '../pages/client/creatClient.js'
import * as eclient from '../pages/client/editclient.js'
import * as reserv from '../pages/reservation/reservation.js'
import * as creserv from '../pages/reservation/creatReservation.js'
import * as ereserv from '../pages/reservation/editreserv.js'

 
/// Test Suit
describe('Test Suit01', function(){
    /// Test Cases
   
    it('Logain Logaut', function(){
        index.preformLogIn(cy,target.home,target.userNamePosition,target.userName,target.userPasswordsPosition,
            target.userPasswords,target.indexLoginButton,target.indexTitle,target.dashuserNamePosition)
        dash.Logout(cy,target.dashLogOutPosition,target.indexTitle)        
               })  
     ///  Undersök sidan  
     
        it('Explore the Site', function(){
            index.preformLogIn(cy,target.home,target.userNamePosition,target.userName,target.userPasswordsPosition,
                target.userPasswords,target.indexLoginButton,target.indexTitle,target.dashuserNamePosition)
           dash.goToARooms(cy,target.roomButton,target.verification)  
           room.goOut(cy,target.creatbutton,target.Roomcreatbutton,target.goOUTofRoom)
           dash.goToARooms(cy,target.billButton,target.verification)
           
           bill.goOut(cy,target.creatbutton,target.Billverification,target.goOUTofRoom)
           dash.goToARooms(cy,target.clientButton,target.verification)
           clients.goOut(cy,target.creatbutton,target.Clientverification,target.goOUTofRoom)
           dash.goToARooms(cy,target.reservationButton,target.verification)
           reserv.goOut(cy,target.creatbutton,target.resVerification ,target.goOUTofRoom)
           dash.Logout(cy,target.dashLogOutPosition,target.indexTitle)    
                   })  
    ///  Skapa Lägenhet   
        it('Create Room ', function(){
            index.preformLogIn(cy,target.home,target.userNamePosition,target.userName,target.userPasswordsPosition,
                target.userPasswords,target.indexLoginButton,target.indexTitle,target.dashuserNamePosition)
            dash.goToARooms(cy,target.roomButton,target.verification)
             room.goInCreatRoom(cy,target.creatbutton,target.Roomcreatbutton) // Går in i "Creat rooms"
           
             croom.creatRoom(cy,target.categoryPosion,target.category,target.numberPosion,target.number,
                target.floorPosion,target.floor,
                target.availablePosion,target.pricePosion,target.price,
                target.featuresPosion,target.features,target.saveButton)
            
            
            room.checkIfCreated(cy,target.number)
          dash.Logout(cy,target.dashLogOutPosition,target.indexTitle)    
           // Loga ut
        }) 
        
    ////  ***** Bills     
     it('Create Bill ', function(){
        index.preformLogIn(cy,target.home,target.userNamePosition,target.userName,target.userPasswordsPosition,
            target.userPasswords,target.indexLoginButton,target.indexTitle,target.dashuserNamePosition)
       dash.goToARooms(cy,target.billButton,target.verification)
       bill.goInCreatBill(cy,target.creatbutton,target.Billverification)
       // New Bill
        cbill.creatBill(cy,target.allPosion,target.cbillcon,target.valuePosion,target.value,
        target.paidPosion,target.saveButton)   
        bill.goOut(cy,target.creatbutton,target.Billverification,target.goOUTofRoom)    // Ut ur Bills 
        dash.Logout(cy,target.dashLogOutPosition,target.indexTitle)       
            }) 
     //// Creat Client    
       
        it('Create Client ', function(){
          // LogIn
          index.preformLogIn(cy,target.home,target.userNamePosition,target.userName,target.userPasswordsPosition,
                target.userPasswords,target.indexLoginButton,target.indexTitle,target.dashuserNamePosition)
          dash.goToARooms(cy,target.clientButton,target.verification)
          clients.goInCreatClient(cy,target.creatbutton,target.Clientverification)
          
          cclient.creatClient(cy,target.allPosion,target.cclientcon,target.nameLabelP,target.nameLabel,
            target.namePosion,target.name,target.emailLabelP,target.emailLabel,target.emailPosion,target.email,
            target.telLabelP,target.telLabel,target.telPosion,target.tel,target.saveButton )
          clients.goOut(cy,target.creatbutton,target.Clientverification,target.goOUTofRoom)
          dash.Logout(cy,target.dashLogOutPosition,target.indexTitle) 
            
            }) 
            
  ////  *****   Reservations
        it('Create reservation ', function(){
            // Logar in  
            index.preformLogIn(cy,target.home,target.userNamePosition,target.userName,target.userPasswordsPosition,
                target.userPasswords,target.indexLoginButton,target.indexTitle,target.dashuserNamePosition)    
            // Går in till Reservation 
            dash.goToARooms(cy,target.reservationButton,target.verification)
            // Gå till Skapa res
            reserv.goToCreatReservaton(cy,target.creatbutton,target.resVerification)
            // skapa reservation
            creserv.creatReservation(cy,target.allPosion,target.cresvverification,
                target.startLabelP,target.startLabel,target.startPosion,target.start,
                target.endLabelP,target.endLabel,target.endPosion,target.end,
                target.clientLabelP,target.clientLabel,target.clientPosion,target.client,
                target.roomLabelP,target.roomLabel,target.roomPosion,target.room,
                target.idLabelP,target.idLabel,target.idPosion,target.id,
                target.saveButton)
            
            // gå till Dash
            reserv.goOut(cy,target.creatbutton,target.resVerification ,target.goOUTofRoom)
            // Loga ut
          dash.Logout(cy,target.dashLogOutPosition,target.indexTitle) 
    }) 
   
/// *** Ändra alla
        it('Edit all', function(){
            index.preformLogIn(cy,target.home,target.userNamePosition,target.userName,target.userPasswordsPosition,
                target.userPasswords,target.indexLoginButton,target.indexTitle,target.dashuserNamePosition)
        
                dash.goToARooms(cy,target.roomButton,target.verification)  
           eroom.edit(cy,target.alldiv,target.room,target.roomimgP,target.editP,target.edroomP,
            target.oldroomnr,target.roomnew,target.saveButton)
           room.goOut(cy,target.creatbutton,target.Roomcreatbutton,target.goOUTofRoom) 

          dash.goToARooms(cy,target.billButton,target.verification)
            ebill.edit(cy,target.alldiv,target.bill,target.billimgP,
                target.editP,target.edbillP,target.oldValue,target.billnew,target.saveButton)
           bill.goOut(cy,target.creatbutton,target.Billverification,target.goOUTofRoom) 
         
            dash.goToARooms(cy,target.clientButton,target.verification)
           eclient.edit(cy,target.alldiv,target.name,target.clientimgP,
            target.editP,target.edClientP,target.newclient,target.saveButton)
           clients.goOut(cy,target.creatbutton,target.Clientverification,target.goOUTofRoom)
         
           dash.goToARooms(cy,target.reservationButton,target.verification)
           ereserv.edit(cy,target.alldiv,target.newclient,target.imgP,
            target.editP,target.edstartP,target.oldstart,target.newstart,
            target.edendP,target.oldend,target.newend,target.saveButton)
           reserv.goOut(cy,target.creatbutton,target.resVerification ,target.goOUTofRoom)
           dash.Logout(cy,target.dashLogOutPosition,target.indexTitle)    
            
        }) 

    /// *** Delete Skappat ärende 
        it('Delete',function(){
            
        index.preformLogIn(cy,target.home,target.userNamePosition,target.userName,target.userPasswordsPosition,
           target.userPasswords,target.indexLoginButton,target.indexTitle,target.dashuserNamePosition)
           dash.goToARooms(cy,target.reservationButton,target.verification)
           reserv.deleteRes(cy,target.alldiv,target.newclient,target.imgP,target.deleteP,)
           reserv.goOut(cy,target.creatbutton,target.resVerification ,target.goOUTofRoom) 
           
           dash.goToARooms(cy,target.clientButton,target.verification)
           clients.deleteClient(cy,target.alldiv,target.newclient,target.clientimgP,target.deleteP)
           clients.goOut(cy,target.creatbutton,target.Clientverification,target.goOUTofRoom) 
        
         dash.goToARooms(cy,target.billButton,target.verification)
          bill.deleteBill(cy,target.alldiv,target.bill,target.billimgP ,target.deleteP)
           bill.goOut(cy,target.creatbutton,target.Billverification,target.goOUTofRoom) 


           dash.goToARooms(cy,target.roomButton,target.verification)  
           room.deleteRoom(cy,target.alldiv,target.roomnew,target.roomimgP ,target.deleteP)
           room.goOut(cy,target.creatbutton,target.Roomcreatbutton,target.goOUTofRoom)
           dash.Logout(cy,target.dashLogOutPosition,target.indexTitle)    
            
            
          
            })
        

        })
/// <reference types="cypress" />


function creatRoom(cy,categoryPosion,category,numberPosion,number,floorPosion,floor,
    availablePosion,pricePosion,price,featuresPosion,features,saveButton){
        // Category  
        cy.get(categoryPosion).select(category)
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


module.exports = {
creatRoom
}
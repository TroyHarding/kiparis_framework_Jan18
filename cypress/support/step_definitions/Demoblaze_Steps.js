/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import demoblazeHome from "../page-object/demoblazeHome_PO";
import demoblazeProduct from "../page-object/demoblazeProduct_PO";
import demoblazeCart from "../page-object/demoblazeCart_PO";

//NEW STUFF
Given(`I log in as a valid user to demoblaze`, () => {
  cy.fixture("demoblaze.json").then((data) => {
    cy.visit(data.baseUrl);
    //Click Login
    cy.get(data.loginbutton).click();
    //Type username
    cy.get("#loginusername").type(data.username);
    //Type password
    cy.get("#loginpassword").type(data.password);
    //Click login
  });
});

Then(`I verify header and footer is correct`, () => {
  const hf = new demoblazeHome();
  hf.headerFooterVerification();
});

Then(`I should see the product {string}`, (selector) => {
  cy.get("dfdf").should("be.visible");
});

When(`I filter product for {string} category`, (product) => {
  const fl = new demoblazeHome();
  fl.filterproduct(product);
});




Given(`new step`, () => {
  const samsungProduct = new demoblazeProduct;
  samsungProduct.verifyProduct();
});

When(`I do stuff`, () => {
  const po = new demoblazeHome();
  po.loginValid();
});

Given('I login to Demoblaze as a valid user', () => {
  const pl = new demoblazeHome();
  pl.loginValid();
}
)

Then('I click and navigate to the {string} product page', (laptop) => {
      const selectP = new demoblazeHome();
      selectP.selectProduct(laptop);

})
  


When ('I add the current item to cart from the product page', () => {
   const ac = new demoblazeProduct();
   ac.addToCart();
  
  
})
  
When ('I navigate to the Cart page', () =>{
    cy.get("a[id='cartur']").should("be.visible");
    cy.get("a[id='cartur']").click();
    
    }
  
)
Then ('I verify the item {string} is present in the cart', () => {
     const item = new demoblazeCart();
     item.orderInCart();
})
When ('I click Place Order and fill out the Form with default information', () => {
  cy.get(".btn.btn-success").click();
  cy.get("div#orderModal>div>div").should("be.visible");
  cy.get("#name").type("Yuliia H");
  cy.get("#country").type("USA");
  cy.get("#city").type("CYPRESS");
  cy.get("#card").type("55555553435567");
  cy.get("#month").type("April");
  cy.get("#year").type("2025");
  cy.get("button[onclick='purchaseOrder()']").click();
}
)
Then("I should see modal indicating a successful purchas", () => {
  cy.get("body > div:nth-child(19)").should("be.visible");
});
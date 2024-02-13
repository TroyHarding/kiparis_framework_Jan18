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
// Then ("I click and navigate to the {string} product page", () => {
//   cy.get("div#tbodyid>div>div>a[href*='=15']").click();
//   cy.get("body").contains("MacBook Pro").should("exist");
// });

Then('I click and navigate to the {string} product page', (laptop) => {
  cy.log("DFdfdfdfdfd");
  switch (laptop) {
    case 'Sony vaio i5':
      cy.log("This is a Sony vaio i5");
      cy.get("div.card-block>h4").contains('Sony vaio i5').click();
      break;
    case 'Sony vaio i7':
      cy.log("This is a Sony vaio i7");
      cy.get("div.card-block>h4").contains('Sony vaio i7').click();
      break;
    case 'MacBook air':
      cy.log("This is a MacBook air");
      cy.get("div.card-block>h4").contains('MacBook air').click();
      break;
    case 'MacBook Pro':
      cy.log("This is a MacBook Pro");
      cy.get("div.card-block>h4").contains('MacBook Pro').click();
      break;
    case '2017 Dell 15.6 Inch':
      cy.log("This is a 2017 Dell 15.6 Inch");
      cy.get("div.card-block>h4").contains('2017 Dell 15.6 Inch').click();
      break;
    case 'Dell i7 8gb':
      cy.log("This is a Dell i7 8gb");
      cy.get("div.card-block>h4").contains('Dell i7 8gb').click();
      break;
    default:
      cy.log("This Ain't it");
      break;
  }
});

When ('I add the current item to cart from the product page', () => {
  const ct = new demoblazeProduct();
  ct.addToCart();
  
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
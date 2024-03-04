/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
 import demoblazeHome from "../page-object/demoblazeHome_PO_Leo";
 import demoblazeProduct from "../page-object/demoblazeProduct_PO_Leo";

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

Then(`I verify header and footer is correct`, () => {});

Then(`I should see the product {string}`, (selector) => {
  cy.get("dfdf").should("be.visible");
});

When(`I filter product for {string} category`, (product) => {
  switch (product) {
    case value:
      "Laptop";
      console.log("This is a laptop");
      break;
    case value:
      "Phone";
      console.log("This is a Phone");
      break;
    case value:
      "Monitors";
      console.log("This is a Minotr");
      break;
    default:
      console.log("This Aint it");
      break;
  }
});

Given(`dfdfdfdf`, (product) => {
  switch (product) {
    case value:
      "Laptop";
      console.log("This is a laptop");
      break;
    case value:
      "Phone";
      console.log("This is a Phone");
      break;
    case value:
      "Monitors";
      console.log("This is a Minotr");
      break;
    default:
      console.log("This Aint it");
      break;
  }
});


Given(`new step`, () => {
  const samsungProduct = new demoblazeProduct;
  samsungProduct.verifyProduct();
});

When(`I do stuff`, () => {
    const po = new demoblazeHome;
    po.loginValid();
});

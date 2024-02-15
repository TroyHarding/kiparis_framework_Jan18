/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import demoblazeHome from "../page-object/demoblazeHome_PO_ED";
import demoblazeProduct from "../page-object/demoblazeProduct_PO_ED";
import demoblazeCart from "../page-object/demoblazeCart_PO_ED";

Given(`I log in as a valid user to demoblaze`, () => {
  cy.fixture("demoblaze.json").then((data) => {
    cy.visit(data.baseUrl);
    cy.get("#login2").click();
    cy.get("#loginusername").type(data.username);
    cy.wait(2000);
    cy.get("#loginpassword").type(data.password);
    cy.get("button[onclick='logIn()']").click();
  });
});

Then(`I verify header and footer is correct`, () => {
  // header
  cy.get("#nava").should("be.visible"); //logo
  cy.get("li[class='nav-item active'] a[class='nav-link']").should(
    "be.visible"
  ); //Home link
  cy.get("a[data-target='#exampleModal']").should("be.visible"); //COntact link
  cy.get("a[data-target='#videoModal']").should("be.visible"); //About us link
  cy.get("#cartur").should("be.visible"); //Cart link
  cy.get("#logout2").should("be.visible"); //Log out link
  cy.get("#nameofuser").should("be.visible"); //Welcome link

  //footer
  // cy.get("div[class='col-sm-4 col-lg-4 col-md-4'] b").should("be.visible"); //About us link   div[class='col-sm-4 col-lg-4 col-md-4'] b
  cy.get("div[class='col-sm-4 col-lg-4 col-md-4'] b")
    .contains("About Us")
    .should("exist");
  // cy.get("div[class='col-sm-3 col-lg-3 col-md-3'] b").should("be.visible"); //Get in Touch link  div[class='col-sm-3 col-lg-3 col-md-3'] b
  cy.get("div[class='col-sm-3 col-lg-3 col-md-3'] b")
    .contains("Get in Touch")
    .should("exist");
});

When(`I filter product for {string} category`, (category) => {
  // //category
  // cy.get("a[onclick=\"byCat('notebook')\"]").click(); //click Laptops;
  // cy.wait(2000);

  switch (category) {
    case "Phones":
      cy.get("a#itemc.list-group-item").contains("Phones").click();
      break;
    case "Laptops":
      cy.get("a#itemc.list-group-item").contains("Laptops").click();
      break;
    case "Monitors":
      cy.get("a#itemc.list-group-item").contains("Monitor").click();
      break;

    // default:
    //   throw new Error(
    //     "Wrong Device name was inputed:" + device + "is not valid"
    //   );
    //   break;
  }
  cy.wait(2000);
});

Then(`I should see the product "MacBook Pro"`, () => {
  cy.get("#tbodyid").contains("MacBook Pro").should("exist");
});

Given(`I click and navigate to the "Macbook Pro" product page`, () => {
  cy.get(
    "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
  ).click();
  cy.get(".name").contains("MacBook Pro").should("exist");
});

When(`I add the current item to cart from the product page`, () => {
  cy.get(".btn.btn-success.btn-lg").click();
  cy.window().then((win) => {
    cy.stub(win, "confirm").returns(true);
  });
});

When(`I navigate to the Cart page`, () => {
  cy.get("#cartur").click();
});

Then(`I verify the item "MacBook Pro" is present in the cart`, () => {
  cy.get("td:nth-child(2)").contains("MacBook Pro").should("exist");
});

When(`I click Place Order and fill out the Form with default information`, () => {
    cy.get(".btn.btn-success").click();
    cy.get("div[id='orderModal'] div[class='modal-content']").should(
      "be.visible"
    );

    cy.get("#name").type("test");
    cy.get("#country").type("test");
    cy.get("#city").type("test");
    cy.get("#card").type("test");

    cy.get("#month").type("test");
    cy.get("#year").type("test");
    cy.get("button[onclick='purchaseOrder()']").click();
  }
);

When(`I should see modal indicating a successful purchase`, () => {
  cy.get(".sweet-alert").should("be.visible");
});

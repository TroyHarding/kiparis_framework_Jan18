/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

import demoblazeHome_PO from "../page-object/demoblazeHome_PO";
import demoblazeCart_PO from "../page-object/demoblazeCart_PO";
import demoblazeProduct from "../page-object/demoblazeProduct_PO";

  // NEW STUFF

Given(`I log in as a valid user to demoblaze`, () => {
    cy.fixture("demoblaze.json").then((data) => {
    cy.visit(data.baseUrl);
    cy.get(data.loginButton).click();
    cy.get("#loginusername").type(data.validUname);
    cy.wait(2000);
    cy.get("#loginpassword").type(data.validP);
    cy.wait(2000);
    cy.get("button[onclick='logIn()']").click();
    cy.wait(2000);
    // cy.get("div[id='logInModal'] div[class='modal-content']").should("not.be.visible");
    // cy.get("div[id='logInModal'] span[aria-hidden='true']").click();
  })
});

Then(`I verify header and footer is correct`, () => {
  cy.get("#nava").should("be.visible");
  cy.get("#navbarExample").should("be.visible");
  cy.get("#footc").should("be.visible");
  cy.get("#footc").contains("About Us").should("exist");
  cy.get("#footc").contains("Get in Touch").should("exist");
  cy.get("#footc").contains("PRODUCT STORE").should("exist");
});

When(`I filter product for {string} category`, (product) => {
  switch (product) {
    case "Laptops":
      cy.get("a[onclick*='notebook']").click();
      cy.get("#tbodyid").contains("MacBook Pro").should("exist");
      cy.get("#tbodyid").contains("Sony vaio i7").should("exist");
      break;
    case "Phones":
      cy.get("a[onclick*='Phones']").click();
      cy.get("#tbodyid").contains("Samsung galaxy s6").should("exist");
      cy.get("#tbodyid").contains("Nexus 6").should("exist");
      break;
    case "Monitors":
      cy.get("a[onclick*='Monitors']").click();
      cy.get("#tbodyid").contains("Apple monitor 24").should("exist");
      cy.get("#tbodyid").contains("ASUS Full HD").should("exist");
      break;
    default:
      console.log("This Aint it");
      break;
  }
});
// When (`I filter product for "Laptops" category`,() => {
//   cy.get("a[onclick*='notebook']").click();
// });

Then(`I should see the product {string}`, (text) => {
  cy.get("#tbodyid").contains(text).should("exist");
});
Given(`I click and navigate to the "Macbook Pro" product page`, () => {
  cy.get(
    "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
  ).click();
  cy.wait(1000);
  cy.get(".name").contains("MacBook Pro").should("exist");
});

When(`I add the current item to cart from the product page`, () => {
  cy.get(".btn.btn-success.btn-lg").click();
});
When(`I navigate to the {string} page`, (text) => {
  cy.get("#cartur").click();
});

Then(`I verify the item {string} is present in the cart`, (text) => {
  cy.get("td:nth-child(2)").contains(text).should("exist");
});
When(
  `I click Place Order and fill out the Form with default information`,
  () => {
    cy.get(".btn.btn-success").click();
    cy.get("#name").type("mcm");
    cy.get("#country").type("mcm");
    cy.get("#city").type("mcm");
    cy.get("#card").type("mcm");
    cy.get("#month").type("mcm");
    cy.get("#year").type("mcm");
    cy.get("button[onclick='purchaseOrder()']").click();
  }
);

Then(`I should see modal indicating a successful purchase`, () => {
  cy.get(".sweet-alert.showSweetAlert.visible").should("exist");
});

When(`I do stuff`, () => {
  const po = demoblazeHome_PO;
  po.loginValid();
});
Then(`I place order`, () => {
  const cart = new demoblazeCart_PO;
  cart.placeOrder();
});
Then(`I verify header and footer is correct`, () => {
  cy.get("#nava").should("be.visible");
  cy.get("#navbarExample").should("be.visible");
  cy.get("#footc").should("be.visible");
  cy.get("#footc").contains("About Us").should("exist");
  cy.get("#footc").contains("Get in Touch").should("exist");
  cy.get("#footc").contains("PRODUCT STORE").should("exist");
});

When(`I filter product for {string} category`, (product) => {
  switch (product) {
    case "Laptops":
      cy.get("a[onclick*='notebook']").click();
      cy.get("#tbodyid").contains("MacBook Pro").should("exist");
      cy.get("#tbodyid").contains("Sony vaio i7").should("exist");
      break;
    case "Phones":
      cy.get("a[onclick*='Phones']").click();
      cy.get("#tbodyid").contains("Samsung galaxy s6").should("exist");
      cy.get("#tbodyid").contains("Nexus 6").should("exist");
      break;
    case "Monitors":
      cy.get("a[onclick*='Monitors']").click();
      cy.get("#tbodyid").contains("Apple monitor 24").should("exist");
      cy.get("#tbodyid").contains("ASUS Full HD").should("exist");
      break;
    default:
      console.log("This Aint it");
      break;
  }
});
// When (`I filter product for "Laptops" category`,() => {
//   cy.get("a[onclick*='notebook']").click();
// });

Then(`I should see the product {string}`, (text) => {
  cy.get("#tbodyid").contains(text).should("exist");
});
Given(`I click and navigate to the "Macbook Pro" product page`, () => {
  cy.get(
    "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
  ).click();
  cy.wait(1000);
  cy.get(".name").contains("MacBook Pro").should("exist");
});

When(`I add the current item to cart from the product page`, () => {
  cy.get(".btn.btn-success.btn-lg").click();
});
When(`I navigate to the {string} page`, (text) => {
  cy.get("#cartur").click();
});

Then(`I verify the item {string} is present in the cart`, (text) => {
  cy.get("td:nth-child(2)").contains(text).should("exist");
});
When(
  `I click Place Order and fill out the Form with default information`,
  () => {
    cy.get(".btn.btn-success").click();
    cy.get("#name").type("mcm");
    cy.get("#country").type("mcm");
    cy.get("#city").type("mcm");
    cy.get("#card").type("mcm");
    cy.get("#month").type("mcm");
    cy.get("#year").type("mcm");
    cy.get("button[onclick='purchaseOrder()']").click();
  }
);

Then(`I should see modal indicating a successful purchase`, () => {
  cy.get(".sweet-alert.showSweetAlert.visible").should("exist");
});

When (`I do stuff`,()=>{
  const po = demoblazeHome_PO_Leo;
  po.loginValid();


})



// import {
//   Given,
//   When,
//   Then,
//   And,
// } from "@badeball/cypress-cucumber-preprocessor";
// import "cypress-iframe";
// import demoblazeHome_PO from "../page-object/demoblazeHome_PO";
// import demoblazeCart_PO from "../page-object/demoblazeCart_PO";

// // NEW STUFF

// Given(`I log in as a valid user to demoblaze`, () => {
//   cy.fixture("demoblaze.json").then((data) => {
//     cy.visit(data.baseUrl);
//     cy.get(data.loginButton).click();
//     cy.get("#loginusername").type(data.validUname);
//     cy.wait(2000);
//     cy.get("#loginpassword").type(data.validP);
//     cy.wait(2000);
//     cy.get("button[onclick='logIn()']").click();
//     cy.wait(2000);
//     // cy.get("div[id='logInModal'] div[class='modal-content']").should("not.be.visible");
//     // cy.get("div[id='logInModal'] span[aria-hidden='true']").click();
//   });
// });

// Then(`I verify header and footer is correct`, () => {
//   cy.get("#nava").should("be.visible");
//   cy.get("#navbarExample").should("be.visible");
//   cy.get("#footc").should("be.visible");
//   cy.get("#footc").contains("About Us").should("exist");
//   cy.get("#footc").contains("Get in Touch").should("exist");
//   cy.get("#footc").contains("PRODUCT STORE").should("exist");
// });

// When(`I filter product for {string} category`, (product) => {
//   switch (product) {
//     case "Laptops":
//       cy.get("a[onclick*='notebook']").click();
//       cy.get("#tbodyid").contains("MacBook Pro").should("exist");
//       cy.get("#tbodyid").contains("Sony vaio i7").should("exist");
//       break;
//     case "Phones":
//       cy.get("a[onclick*='Phones']").click();
//       cy.get("#tbodyid").contains("Samsung galaxy s6").should("exist");
//       cy.get("#tbodyid").contains("Nexus 6").should("exist");
//       break;
//     case "Monitors":
//       cy.get("a[onclick*='Monitors']").click();
//       cy.get("#tbodyid").contains("Apple monitor 24").should("exist");
//       cy.get("#tbodyid").contains("ASUS Full HD").should("exist");
//       break;
//     default:
//       console.log("This Aint it");
//       break;
//   }
// });
// // When (`I filter product for "Laptops" category`,() => {
// //   cy.get("a[onclick*='notebook']").click();
// // });

// Then(`I should see the product {string}`, (text) => {
//   cy.get("#tbodyid").contains(text).should("exist");
// });
// Given(`I click and navigate to the "Macbook Pro" product page`, () => {
//   cy.get(
//     "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
//   ).click();
//   cy.wait(1000);
//   cy.get(".name").contains("MacBook Pro").should("exist");
// });

// When(`I add the current item to cart from the product page`, () => {
//   cy.get(".btn.btn-success.btn-lg").click();
// });
// When(`I navigate to the {string} page`, (text) => {
//   cy.get("#cartur").click();
// });

// Then(`I verify the item {string} is present in the cart`, (text) => {
//   cy.get("td:nth-child(2)").contains(text).should("exist");
// });
// When(
//   `I click Place Order and fill out the Form with default information`,
//   () => {
//     cy.get(".btn.btn-success").click();
//     cy.get("#name").type("mcm");
//     cy.get("#country").type("mcm");
//     cy.get("#city").type("mcm");
//     cy.get("#card").type("mcm");
//     cy.get("#month").type("mcm");
//     cy.get("#year").type("mcm");
//     cy.get("button[onclick='purchaseOrder()']").click();
// );

// Then(`I should see modal indicating a successful purchase`, () => {
//   cy.get(".sweet-alert.showSweetAlert.visible").should("exist");
// });

// // When(`I do stuff`, () => {
// //   const po = demoblazeHome_PO;
// //   po.loginValid();
// // });
// // Then(`I place order`, () => {
// //   const cart = new demoblazeCart_PO;
// //   cart.placeOrder();
// // });


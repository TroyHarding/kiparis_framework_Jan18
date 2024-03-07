/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import demoblazeHome from "../page-object/demoblazeHome_PO_Nadiia";
import demoblazeProduct from "../page-object/demoblazeProduct_PO_Nadiia";
import demoblazeCart from "../page-object/demoblazeCart_PO_Nadiia";

Given(`I log in as a valid user to demoblaze`, () => {
  const po = new demoblazeHome();
  po.loginValid();
});

Then(`I verify header and footer is correct`, () => {
  const home = new demoblazeHome();
  home.headerFooterTest();
});

// Then(`I should see the product {string}`, (selector) => {
//   cy.get("dfdf").should("be.visible");
// });

When(`I filter product for category`, () => {
  const cg = new demoblazeHome();
  cg.filterCategory();
});

Then(`I navigate to the product page and add to cart`, () => {
  const pr = new demoblazeProduct();
  pr.verifyProduct();
});

Then(`I verify the item is present in the cart`, () => {
  const cart = new demoblazeCart();
  cart.cartVerify();
});

When(
  `I click Place Order and fill out the Form with default information`,
  () => {
    const plOr = new demoblazeCart();
    plOr.clickPlaceOrder();
    plOr.orderForm();
  }
);

Then(`I should see modal indicating a successful purchase`, () => {
  const orConf = new demoblazeCart();
  orConf.successOrder();
});

// Given(`I open url {string}`, (arg0) => {
//   // [Given] Sets up the initial state of the system.
// });

// Given(`new step`, () => {
//   const samsungProduct = new demoblazeProduct;
//   samsungProduct.verifyProduct();
// });

// When(`I filter product for {string} category`, (product) => {
//   //let product = cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)").click();
//       switch (product) {
//         case Laptop: "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)";
//           console.log("This is Laptop");
//           break;
//       case value:
//           "Phone";
//           console.log("This is Phone");
//           break;
//       case value:
//           "Monitors";
//           console.log("This is Monitors");
//           break;
//       case value:
//           "Monitors";
//           console.log("This is Monitors");
//           break;
//         default:
//           console.log("This Ain't it")
//           break;
//       }
//     });

//   Then(`I should see the product "MacBook Pro"`, () => {
//     cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2)").contains("MacBook Pro").should("exist");
//   });

//   Then(`I verify that you are on the {string} Product Page`, (title) => {
//         cy.get(".name").should("eq", "MacBook Pro");
//       });

// When (`I add the current item to cart from the product page`, () => {
//         cy.get(".btn.btn-success.btn-lg").click()
// });
// Then(`I navigate to the Cart page`, () => {
//     cy.get("#cartur").click()
// });
// Then(`I verify the item {string} is present in the cart`, (tytle) => {
//     cy.get("td:nth-child(2)").contains("MacBook Pro");
// })

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
import demoblazeCart from "../page-object/demoblazeCart_PO_Leo";

//NEW STUFF
Given(`I log in as a valid user to demoblaze`, () => {
  cy.fixture("demoblaze_Leo.json").then((data) => {
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

// Given(`I open url {string}`, (arg0) => {
//   // [Given] Sets up the initial state of the system.
// });

Given(`new step`, () => {
  const samsungProduct = new demoblazeProduct;
  samsungProduct.verifyProduct();
});

When(`I login to Demoblaze as a valid user`, () => {
    const po = new demoblazeHome;
    po.loginValid();
});

Then ('I check header',() => {
  const header = new demoblazeHome;
  header.checkHeader();

});
Then ('I check footer',() => {
  const foot = new demoblazeHome;
  foot.checkFooter();

});
Then ('I check categories',() => {
  const cat = new demoblazeHome;
  cat.checkCategories();

});
Given ('I choose category', ()=> {
  const catCh = new demoblazeProduct;
  catCh.chooseCategory();

});

Then ('I verify the product',()=> {
  const verProd = new demoblazeProduct;
  verProd.verifyProduct();

});

Then ('I add product to cart',()=> {
  const addCart = new demoblazeProduct;
  addCart.addToCart();

});

Given ('I click cart',()=> {
  const clCart = new demoblazeCart;
  clCart.clickCart();

});

Then ('I verify product was added',()=> {
  const descProd = new demoblazeCart;
  descProd.verifyProdAdd();

});

Then ('I verify delete button',()=> {
  const btnDel = new demoblazeCart;
  btnDel.verifyDel();

});

Then ('I verify existence of total',()=> {
  const sumTotal = new demoblazeCart;
  sumTotal.verifyDel();

});

Then ('I click Place Order',()=> {
  const clOrder = new demoblazeCart;
  clOrder.clickOrder();

});
Then ('I process the purchase',()=> {
  const detOrder = new demoblazeCart;
  detOrder.orderPurchase();

});



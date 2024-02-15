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
    const po = new demoblazeHome;
    po.loginValid();
});

  
  Then(`I verify header and footer is correct`, () => {
    const po = new demoblazeHome;
    po.headerFooterTest();
  
  });
  
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
  
  Given(`I open url {string}`, (arg0) => {
    // [Given] Sets up the initial state of the system.
  });
  
  Given(`new step`, () => {
    const samsungProduct = new demoblazeProduct;
    samsungProduct.verifyProduct();
  });
  


  Given(`I login to Demoblaze as a valid user`, () => {
    cy.fixture("demoblaze.json").then((data) => {
        cy.visit(data.baseUrl);
        cy.get("#login2").click();
        cy.get("#loginusername").type(data.username);
        cy.wait(5000)
        cy.get("#loginpassword").type(data.password);
        cy.get("button[onclick='logIn()']").click(); 
      })
    });



  

  When(`I filter product for {string} category`, (product) => {
    //let product = cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)").click();
        switch (product) {
          case Laptop: "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)";
            console.log("This is Laptop");
            break;
        case value:
            "Phone";
            console.log("This is Phone");
            break;
        case value:
            "Monitors";
            console.log("This is Monitors");
            break;
        case value:
            "Monitors";
            console.log("This is Monitors");
            break;
          default:
            console.log("This Ain't it")
            break;
        }
      });
//     cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)").click();
// });

  Then(`I should see the product "MacBook Pro"`, () => {
    cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2)").contains("MacBook Pro").should("exist");
  });

  When(`I click and navigate to the "Macbook Pro" product page`, () => {
    cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)").click();
  });

  Then(`I verify that you are on the {string} Product Page`, (title) => {
        cy.get(".name").should("eq", "MacBook Pro");
      });

When (`I add the current item to cart from the product page`, () => {
        cy.get(".btn.btn-success.btn-lg").click()
});
Then(`I navigate to the Cart page`, () => {
    cy.get("#cartur").click()
});
Then(`I verify the item {string} is present in the cart`, (tytle) => {
    cy.get("td:nth-child(2)").contains("MacBook Pro");
})
  


/// <reference types="cypress" />
import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import "cypress-iframe";

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



  
  Then(`I verify header and footer is correct`, () => {
    cy.get("#logout2").should("be.visible");
    cy.get("#nameofuser").contains("Welcome nadiiazhuk").should("exist");
    cy.get("body div[id='footc'] div[id='fotcont'] div:nth-child(1) div:nth-child(1) div:nth-child(1)").contains("We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.").should("exist");
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
  


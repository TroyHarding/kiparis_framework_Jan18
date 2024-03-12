/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import parabank_PO from "../page-object/parabank_PO";

Given("I open new url {string}", () => {
  cy.fixture("parabank_Leo.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});

Then("I click link {string}", (link) => {
  cy.fixture("parabank_Leo.json").then((data) => {
    switch (link) {
      case "<register>":
        cy.get(data.register).click();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I interacts with the page {string}", (link) => {
  cy.fixture("parabank_Leo.json").then((data) => {
    switch (link) {
      case "<register>":
        const rgst = new parabank_PO();
        rgst.register();
        break;

      case "<open_new_account>":
        const open = new parabank_PO();
        open.open_new_account();
        break;

      case "<transfer_funds>":
        const trf = new parabank_PO();
        trf.transfer_funds_min();
        trf.transfer_funds_max();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I login as a {string}", (link) => {
  cy.fixture("parabank_Leo.json").then((data) => {
    const lg = new parabank_PO();
    lg.login();
  });
});

Given("I open para url {string}", () => {
  cy.fixture("parabank_Nadiia.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});

Then("I click para link {string}", (link) => {
  cy.fixture("parabank_Nadiia.json").then((data) => {
    switch (link) {
      case "<register>":
        cy.get(data.register).click();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I interacts with the  register page {string}", (link) => {
  cy.fixture("parabank_Nadiia.json").then((data) => {
    switch (link) {
      case "<register>":
        const rgst = new parabank_PO();
        rgst.register();
        break;

      case "<open_new_account>":
        const open = new parabank_PO();
        open.open_new_account();
        break;

      case "<transfer_funds>":
        const trf = new parabank_PO();
        trf.transfer_funds_min();
        trf.transfer_funds_max();
        break;

      default:
        console.log("I can't find the link");
        break;
    }
  });
});

Then("I login as {string}", (link) => {
  cy.fixture("parabank_Nadiia.json").then((data) => {
    const lg = new parabank_PO();
    lg.login();
  });
});


Given("I navigate to the default parabank page", () => {
  cy.fixture("parabank_sneha.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});
When("I click the Register button", () => {
  cy.fixture("parabank_sneha.json").then((data) => {
    cy.get(data.registerHome).click();
  });
});
When("I fill out all of the required registration details", () => {});
When("I click the Register button", () => {});
Then("I verify my account has been created", () => {});

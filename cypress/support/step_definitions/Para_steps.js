/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import parabank_PO from "../page-object/parabank_PO";

Given("I open url {string}", () => {
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

Given(`I navigate to the default parabank page`, () => {
  cy.fixture("parabank_elena.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});

When(`I click the Register button`, () => {
  cy.fixture("parabank_elena.json").then((data) => {
    cy.get(data.registerHome).click();
  });
});

When(`I fill out all the required register fields`, () => {
  cy.fixture("parabank_elena.json").then((data) => {
    const timestamp = new Date().getTime();
    const uniqueFirstName = `${data.registerUser.firstName}_${timestamp}`;
    const uniqueLastName = `${data.registerUser.lastName}_${timestamp}`;
    cy.get(data.firstName).type(uniqueFirstName);
    cy.get(data.lastName).type(uniqueLastName);
    cy.get(data.address).type(data.registerUser.address);
    cy.get(data.city).type(data.registerUser.city);
    cy.get(data.state).type(data.registerUser.state);
    cy.get(data.zipCode).type(data.registerUser.zipCode);
    cy.get(data.phone).type(data.registerUser.phone);
    cy.get(data.ssn).type(data.registerUser.ssn);
    cy.get(data.userName).type(uniqueFirstName);
    cy.get(data.password).type(uniqueLastName);
    cy.get(data.confirm).type(uniqueLastName);
  });
});

When(`I click the RegisterButton to complete sign up`, () => {
  cy.fixture("parabank_elena.json").then((data) => {
    cy.get(data.registerForm).click();
  });
});

When(`I verify my account has been created`, () => {
  cy.fixture("parabank_elena.json").then((data) => {
    cy.get(data.welcomeMessage).should("contain", "Welcome");
    cy.get(data.accountCreatedSuccess).should("exist");
  });
});

Then(`I log out`, () => {
  cy.fixture("parabank_elena.json").then((data) => {
    cy.get(data.logOutLink).click();
  });
});

// Given(`I login to parabank`, () => {
//   const po = new parabank_PO;
//   po.login();
// });

When(`I click Open New Account`, () => {
  const po = new parabank_PO();
  cy.get(po.openAccountLink).click();
  cy.get(po.openAccountButton).click();
});

Then(`I verify my account is open`, () => {
  cy.fixture("parabank_elena.json").then((data) => {
    cy.get(data.accountOpenMessage).should("contain", "Account Opened!");
    cy.get(data.newAccountNumber).should("exist");
  });
});

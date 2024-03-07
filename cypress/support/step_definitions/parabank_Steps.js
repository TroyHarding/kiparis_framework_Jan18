/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

import Parabank_PO from "../page-object/Parabank_PO";

Given(`I navigate to default parabank page`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.visit(data.BaseUrl);
  });
});

When(`I click the register button`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.get(data.registerHome).click();
    cy.wait(1000);
  });
});

When(`I fill out all of the required registration fields`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.get(data.name).type(data.user.name);
    cy.get(data.lastName).type(data.user.lastName);
    cy.get(data.address).type(data.user.address);
    cy.get(data.city).type(data.user.city);
    cy.get(data.state).type(data.user.state);
    cy.get(data.zipcode).type(data.user.zipcode);
    cy.get(data.phone).type(data.user.phone);
    cy.get(data.ssn).type(data.user.ssn);
    cy.get(data.userName).type(data.user.userName);
    cy.get(data.password).type(data.user.password);
    cy.get(data.confirmPassword).type(data.user.confirmPassword);
  });
});

When(`I click the register button to complete sign up`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.get(data.registerForm).click();
  });
});

// When(`I click the register button to complete sign up`, () => {
//   cy.fixture("parabankJane.json").then((data) => {
//     const po = Parabank_PO;
//    po.register();

//   });
// });


// Then(`I verify my account has been created`, () => {
//   cy.fixture("parabankJane.json").then((data) => {
//     cy.get(data.SucsessInfo)
//       .contains(data.user.SucsessInfo)
//       .should("exist");
//   });
// });

// Given(`I log in to parabank`, () => {
//   cy.fixture("parabankJane.json").then((data) => {
//   const po = Parabank_PO;
//   po.login();
// });
// });

// Given(`I log in to parabank`, () => {
//   cy.fixture("parabankJane.json").then((data) => {
//     cy.visit(data.BaseUrl);
//     cy.get(data.userNameLogin).type(data.user.userName);
//     cy.get(data.passwordLogin).type(data.user.password);
//     cy.get(data.loginButton).click();
//     cy.wait(1000);
//   });
// });

When(`I open new account`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.get(data.OpenAccountHomePage).click();
    cy.get(data.OpenAccountSubmit).click();
    cy.get(data.OpenAccountConfirmation).contains(data.user.OpenAccountConfirmation)
  });
});

// When(`I open new account`, () => {
//   const po = Parabank_PO;
//   po.openMewAccount();

// })

When(`I tranfer funds`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.visit(data.BaseUrl);
    cy.get(data.userNameLogin).type(data.user.userName);
    cy.get(data.passwordLogin).type(data.user.password);
    cy.get(data.loginButton).click();
    cy.get(data.TransferHomePage).click();
    cy.get(data.Amount).type(data.user.Amount);
    cy.get(data.TransferButton).click();
    cy.get(data.TransferComplete).contains(data.user.TransferComplete);
  });
});

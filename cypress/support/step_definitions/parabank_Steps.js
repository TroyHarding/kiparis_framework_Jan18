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
    cy.get(data.firstName).type(data.registerUser.firstName);
    cy.get(data.lastName).type(data.registerUser.lastName);
    cy.get(data.address).type(data.registerUser.address);
    cy.get(data.city).type(data.registerUser.city);
    cy.get(data.state).type(data.registerUser.state);
    cy.get(data.zipcode).type(data.registerUser.zipcode);
    cy.get(data.phone).type(data.registerUser.phone);
    cy.get(data.ssn).type(data.registerUser.ssn);
    cy.get(data.userName).type(data.registerUser.userName);
    cy.get(data.password).type(data.registerUser.password);
    cy.get(data.confirmPassword).type(data.registerUser.confirmPassword);
  });
});

When(`I click the register button to complete sign up`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.get(data.registerForm).click();
  });
});

Then(`I verify my account has been created`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.get(data.SucsessInfo)
      .contains(data.registerUser.SucsessInfo)
      .should("exist");
  });
});

// Given(`I log in to parabank`, () => {
//   const po = Parabank_PO;
//   po.login();
// });

Given(`I log in to parabank`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.visit(data.BaseUrl);
    cy.get(data.userNameLogin).type(data.registerUser.userName);
    cy.get(data.passwordLogin).type(data.registerUser.password);
    cy.get(data.loginButton).click();
    cy.wait(1000);
  });
});

When(`I open new account`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.get(data.OpenAccountHomePage).click();
    cy.get(data.OpenAccountSubmit).click();
  });
});

When(`I tranfer funds`, () => {
  cy.fixture("parabankJane.json").then((data) => {
    cy.get(data.TransferHomePage).click();
    cy.get(data.Amount).type(data.userRegisterUser.Amount);
    cy.get(data.TransferButton).click();
    cy.get(data.TransferComplete).contains(data.registerUser.TransferComplete);
  });
});

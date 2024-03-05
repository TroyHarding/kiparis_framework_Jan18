    /// <reference types="cypress" />
    import {
        Given,
        When,
        Then,
      } from "@badeball/cypress-cucumber-preprocessor";
      import "cypress-iframe";

      Given(`I navigate to the default parabank page`, () => {
        cy.fixture("parabank_olena.json").then((data) => {
            cy.visit(data.baseUrl);
        })
      });

      When(`I click the Register button`, () => {
        cy.fixture("parabank_olena.json").then((data) => {
            cy.get(data.registerHome).click();
        })   
      });

      When(`I fill out all of the required registration fields`, () => {
        cy.fixture("parabank_olena.json").then((data) => {
            cy.get(data.firstName).type(data.registerUser.firstName);
            cy.get(data.lastName).type(data.registerUser.lastName);
            cy.get(data.address).type(data.registerUser.address);
            cy.get(data.city).type(data.registerUser.city);
            cy.get(data.state).type(data.registerUser.state);
            cy.get(data.zipCode).type(data.registerUser.zipCode);
            cy.get(data.phone).type(data.registerUser.phone);
            cy.get(data.ssn).type(data.registerUser.ssn);
            cy.get(data.userName).type(data.registerUser.userName);
            cy.get(data.password).type(data.registerUser.password);
            cy.get(data.confirmPassword).type(data.registerUser.password);
            
        }) 
      });

      When(`I click the Register button to complete sign up`, () => {
        cy.fixture("parabank_olena.json").then((data) => {
            cy.get(data.registerForm).click();
        }) 
      });
      
      When(`I click Open New Account button`, () => {
        cy.fixture("parabank_olena.json").then((data) => {
            cy.visit(data.baseUrl);
            cy.get(data.logInUserName).type(data.activetedUser.name);
            cy.get(data.logInUserPassword).type(data.activetedUser.password);
            cy.get(data.logIn).click();

            cy.get(data.buttonOpenAccount).click();
        }) 
      });

      When(`I select an account type`, () => {
        
      });

   
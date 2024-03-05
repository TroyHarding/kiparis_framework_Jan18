    /// <reference types="cypress" />
import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import "cypress-iframe";
  
Given(`I navigate to the default parabank page`, () => {
    cy.fixture("parabank_elena.json").then((data) =>{
        cy.visit(data.baseUrl);
    })
      
});

When(`I click the Register button`, () => {
    cy.fixture("parabank_elena.json").then((data) =>{
        cy.get(data.registerHome).click();
    })
});

When(`I fill out all the required register fields`, (url) => {
    cy.fixture("parabank_elena.json").then((data) =>{
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
        cy.get(data.confirm).type(data.registerUser.password);

        cy.get(data.registerForm).click();

    })


    
});

// When(`I click the Register button to complete sign up`, (url) => {
    
// });

// Then(`I verify my account has been created`, (url) => {
    
// });

 
  

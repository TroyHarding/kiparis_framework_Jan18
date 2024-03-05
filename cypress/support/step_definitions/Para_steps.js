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

When(`I click the Register button`, (url) => {
    cy.visit(url);
});

When(`I fill out all the required register fields`, (url) => {
    cy.visit(url);


    
});

When(`I click the Register button`, (url) => {
    cy.visit(url);
});

Then(`I verify my account has been created`, (url) => {
    cy.visit(url);
});

 
  

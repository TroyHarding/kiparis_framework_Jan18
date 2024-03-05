 /// <reference types="cypress" />
 import {
    Given,
    When,
    Then,
    And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
// import { data } from "cypress/types/jquery"ent
import  parabank_PO from "../page-object/parabank_PO";
Given('I navigate to the default parabank page', ()=>{
cy.fixture("parabank_sneha.json").then((data) => {
    cy.visit(data.baseUrl);

});
});
When('I click the Register button', ()=>{
cy.fixture("parabank_sneha.json").then((data)=>{
    cy.get(data.registerHome).click();
});
});
When('I fill out all of the required registration details', ()=>{

});
When('I click the Register button', ()=>{

});
Then('I verify my account has been created', ()=>{

});
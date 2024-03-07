/// <reference types="cypress" />

class parabank_PO {
    constructor() {
      this.openAcc = "a[href='/parabank/openaccount.htm']";
      this.loginUsername = "input[name='username']";
      this.loginPassword = "input[name='password']";
      this.loginButton = "input[value='Log In']";
      this.openAccountLink = "a[href='/parabank/openaccount.htm']";
      this.openAccountButton = "input[value='Open New Account']";
    }

    register(){
        cy.fixture("parabank_elena.json").then((data) => {
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
          });
    }

    login(){
      cy.fixture("parabank_elena.json").then((data) => {
        cy.visit(data.baseUrl);
        cy.get(this.loginUsername).type(data.registerUser.userName);
        cy.get(this.loginPassword).type(data.registerUser.password);
        cy.get(this.loginButton).click();
      });

    }

  
    
  }
  
  export default parabank_PO;
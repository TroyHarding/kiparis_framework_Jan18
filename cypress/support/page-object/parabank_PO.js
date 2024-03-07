/// <reference types="cypress" />

class Parabank_PO {
  constructor() {
    this.userName = "input[type='text']";
    this.password = "input[type='password']";
    this.loginButton = "input[type='submit']";
  }

  login() {
    cy.fixture("parabankJane.json").then((data) => {
      cy.visit(data.BaseUrl);
      cy.get(userNameLogin).type(data.registerUser.userName);
      cy.get(passwordLogin).type(data.registerUser.password);
      cy.get(loginButton).click();
    });
  }

  openNewAccount(){
    cy.fixture("parabankJane.json").then((data) => {
      cy.visit(data.BaseUrl);
      cy.get(data.openNewAccount).click();
      cy.get(data.OpenAccountSubmit).click();
      cy.get(data.openAccountConfirmation).contains(data.registerUser.openAccountConfirmation);
        })
}
}
export default Parabank_PO;

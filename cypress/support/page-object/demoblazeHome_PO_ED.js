/// <reference types="cypress" />

class demoblazeHome {
  constructor() {
    this.loginButton = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButtonModal = "button[onclick='logIn()']";
  }

  loginValid() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(this.loginButton).click();
      cy.get(this.usernameInput).type(data.username);
      cy.get(this.passwordInput).type(data.password);
      cy.get(this.loginButtonModal).click();
    });
  }
}

export default demoblazeHome;

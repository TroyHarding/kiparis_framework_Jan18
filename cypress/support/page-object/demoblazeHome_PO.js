/// <reference types="cypress" />

class demoblazeHome_PO {
  constructor() {
    this.loginButton = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButtonModal = "button[onclick='logIn()']";
    this.header = "#navbarExample";
    this.footer = "#fotcont";
  }

  loginValid() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(this.loginButton).click();
      cy.get(this.usernameInput).type(data.username);
      cy.get(this.passwordInput).type(data.password);
      cy.get(this.loginButtonModal).click();
      cy.get(this.header).should("have.text",data.headerText);
      cy.get(this.footer).should("have.text",data.footerText);
    });
  }
}

export default demoblazeHome_PO;

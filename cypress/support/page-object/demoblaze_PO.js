
/// <reference types="cypress" />

class demoblaze_PO {
  constructor() {
    this.loginButton = "#login2"
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButtonModal = "button[onclick='logIn()']"
  }

  loginValid() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(loginButton).click();
      cy.get(usernameInput).type(data.username);
      cy.get(passwordInput).type(data.password);
      cy.get(loginButtonModal).click();
    });
  }


}



export default demoblaze_PO;
  
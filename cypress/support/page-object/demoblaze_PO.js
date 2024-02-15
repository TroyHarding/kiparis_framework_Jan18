
/// <reference types="cypress" />

class demoblaze_PO {
  constructor() {
    this.loginButton = "#login2"
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButtonModal = "button[onclick='logIn()']"
    this.logoutButtonModal = "#logout2"
    this.userNameField = "#nameofuser"
    this.aboutUs = ".thumbnail"
  }

  loginValid() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(loginButton).click();
      cy.get(usernameInput).type(data.username);
      cy.wait(5000);
      cy.get(passwordInput).type(data.password);
      cy.get(loginButtonModal).click();
    });
  }

  headerFooterTest() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(logoutButtonModal).should("be.visible");
      cy.get(userNameField).contains(`Welcome ${data.userName}`).should("exist");
      cy.get(aboutUs).contains(data.aboutUs)

  });
}
}


export default demoblaze_PO;
  
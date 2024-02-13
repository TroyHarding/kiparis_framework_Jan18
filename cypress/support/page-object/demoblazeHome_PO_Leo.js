/// <reference types="cypress" />

class demoblazeHome {
  constructor() {
    this.loginButton = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButtonModal = "button[onclick='logIn()']";
    this.header = "#navbarExample";
    this.footerAbout = "h4[class='grrrr']";
    this.footerText = "h4.grrrr + p";
    this.categories = "a[class='list-group-item']";
    
  }

  loginValid() {
    cy.fixture("demoblaze_Leo.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(this.loginButton).click();
      cy.get(this.usernameInput).type(data.username);
      cy.get(this.passwordInput).type(data.password);
      cy.get(this.loginButtonModal).click();
    });
  }

  checkHeader() {
    cy.get(this.header).should('contain', 'Home');
    cy.get(this.header).should('contain', 'Contact');
    cy.get(this.header).should('contain', 'About us');
    cy.get(this.header).should('contain', 'Cart');
    cy.get(this.header).should('contain', 'Log out');
    
  }
  checkFooter() {
    cy.get(this.footerAbout).should('have.text', 'About UsGet in Touch');
    cy.get(this.footerText).should('contain', 'We believe performance needs');
  }
  checkCategories(){
    cy.get(this.categories).should('contain', 'Phones');
    cy.get(this.categories).should('contain', 'Laptops');
    cy.get(this.categories).should('contain', 'Monitors');

  }
}

export default demoblazeHome;

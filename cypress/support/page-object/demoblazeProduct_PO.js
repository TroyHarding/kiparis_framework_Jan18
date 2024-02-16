/// <reference types="cypress" />

class demoblazeProduct {
  constructor() {
    this.name = ".name";
    this.price = ".price-container";
    this.description = "#more-information > p";
    this.addToCart = ".btn.btn-success.btn-lg";
  }

  verifyProduct() {
    cy.fixture("demoblaze.json").then((data) => {
     cy.visit("https://www.demoblaze.com/prod.html?idp_=1");
      cy.get(this.name).should("have.text", data.product);
      cy.get(this.price).should("have.text", data.price);
      cy.get(this.addToCart).click();
      //TODO not working
      //cy.get(this.description).should("have.text", data.description);
    });
  }

  addToCart() {
    cy.get(this.addToCart).click();
    
  }
}


export default demoblazeProduct;
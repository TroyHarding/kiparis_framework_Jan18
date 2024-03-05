/// <reference types="cypress" />

class demoblazeProduct {
  constructor() {
    this.imageCarousel = ".#myCarousel-2";
    this.productName = ".name";
    this.productPrice = ".price-container";
    this.description = "#more-information > p";
    this.btnToCart = ".btn.btn-success.btn-lg";
  }
  chooseCategory() {
    cy.fixture("demoblaze_Leo.json").then((data) => {
      cy.visit("https://www.demoblaze.com/");
      cy.get(data.category).click();
    });
  }

  verifyProduct() {
    cy.fixture("demoblaze_Leo.json").then((data) => {
      cy.get(data.productClick).click();
      cy.get(this.name).should("have.text", data.product);
      cy.get(this.price).should("have.text", data.price);
      cy.get(this.description).should("have.text", data.description);
    });
  }

  addToCart() {
    cy.get(this.btnToCart).click();
  }
}

export default demoblazeProduct;

/// <reference types="cypress" />

class demoblazeCart {
  constructor() {
    //elements
    this.cart = "#cartur";
    this.prContainer = ".#tbodyid";
    this.description = "div[class='col-lg-8'] > h2";
    this.deleteButton = "a[onclick*=deleteItem]";
    this.totalPrice = "#totalp";
    this.placeOrder = ".btn.btn-success";
    this.name = "#name";
    this.country = "#country";
    this.city = "#city";
    this.card = "#card";
    this.month = "#month";
    this.year = "#year";
    this.purchaseButton = "button[onclick='purchaseOrder()']";
    this.successWindow = ".sa-icon.sa-success.animate";
  }

  cartVerify() {
    cy.visit("https://www.demoblaze.com/");
    cy.get(this.cart).click();
    cy.get(this.prContainer).should("contain", data.productName);
    cy.get(this.description).should("exist");
    cy.get(this.deleteButton).should("exist");
    cy.get(this.totalPrice).should("exist");
  }

  clickPlaceOrder() {
    cy.get(this.placeOrder).click();
    cy.wait(5000);
  }
  orderForm() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.get(this.name).type(data.name);
      cy.get(this.country).type(data.country);
      cy.get(this.city).type(data.city);
      cy.get(this.card).type(data.card);
      cy.get(this.month).type(data.month);
      cy.get(this.year).type(data.year);
    });
  }
  successOrder() {
    cy.visit("https://www.demoblaze.com/");
    cy.get(this.purchaseButton).click();
    cy.get(this.successWindow).should("exist");
  }
}
export default demoblazeCart;

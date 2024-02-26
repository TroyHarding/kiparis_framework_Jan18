/// <reference types="cypress" />

class demoblazeCart {
  constructor() {
    //elements
    this.desc = "div[class='col-lg-8'] > h2";
    this.placeOrder = ".btn.btn-success";
    this.deleteButton = "a[onclick*=deleteItem]";
    this.productContainer = "#tbodyid > tr > td";
    this.totalPrice = "#totalp";
    this.cart = "#cartur";
    this.name = "#name";
    this.country = "#country";
    this.city = "#city";
    this.card = "#card";
    this.month = "#month";
    this.year = "#year";
    this.btnPurchase = "button[onclick='purchaseOrder()']";
    this.success = ".sa-icon.sa-success.animate";
  }

  clickCart() {
    cy.visit("https://www.demoblaze.com/");
    cy.get(this.cart).click();
  }
  verifyProdAdd() {
    cy.fixture("demoblaze_Leo.json").then((data) => {
      cy.get(this.desc).should("exist");
      cy.get(this.productContainer).should("contain", data.product);
    });
  }

  verifyDel() {
    cy.get(this.deleteButton).should("exist");
  }
  verifyTotal() {
    cy.get(this.totalPrice).should("exist");
  }

  clickOrder(){
    cy.get(this.placeOrder).click();
    cy.wait (1000);
  }
  orderPurchase(){
    cy.fixture("demoblaze_Leo.json").then((data) => {
        cy.get(this.name).type(data.name);
        cy.get(this.country).type(data.country);
        cy.get(this.city).type(data.city);
        cy.get(this.card).type(data.card);
        cy.get(this.month).type(data.month);
        cy.get(this.year).type(data.year);
        cy.get(this.btnPurchase).click();
        cy.get(this.success).should("exist");
        
      });

  }

}
export default demoblazeCart;

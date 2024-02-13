/// <reference types="cypress" />

class demoblazeCart_PO {
  constructor() {
    //elements
    this.header = "div[class='col-lg-8'] h2";
    this.placeOrder = ".btn.btn-success";
    this.deleteButton = "a[onclick*=deleteItem]";
    this.productContainer = "#tbodyid > tr > td";
    this.totalPrice = "#totalp";
    this.cartButton = "#cartur";
    this.cartName = "#name";
    this.cartCountry = "#country";
    this.cartCity = "#city";
    this.cartCard = "#card";
    this.cartMonth = "#month";
    this.cartYear = "#year";
    this.cartPurchase = "body.modal-open:nth-child(2) div.modal.fade.show:nth-child(3) div.modal-dialog div.modal-content div.modal-footer > button.btn.btn-primary:nth-child(2)";
    this.purchaceAlert = ".sweet-alert.showSweetAlert.visible";
  }

  orderPlace() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(this.cartButton).click();
      cy.get(this.productContainer).should("have.text", data.cartProduct);
      cy.get(this.totalPrice).should("have.text", data.totalPrice);
      cy.get(this.placeOrder).click();
      cy.get(this.cartName).type("mcm");
      cy.get(this.cartCountry).type("mcm");
      cy.get(this.cartCity).type("mcm");
      cy.get(this.cartCard).type("mcm");
      cy.get(this.cartMonth).type("mcm");
      cy.get(this.cartYear).type("mcm");
      cy.get(this.cartPurchase).click();
      cy.get(this.purchaceAlert).should("exist");
      
      
    });
  }
}

export default demoblazeCart_PO;

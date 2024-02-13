/// <reference types="cypress" />

class demoblazeCart {
    constructor() {
        this.header = "div[class='col-lg-8'] h2";
        this.placeOrder = ".btn.btn-success";
        this.deleteButton = "a[onclick*=deleteItem]";
        this.productContainer = "tbody#tbodyid";
        this.totalPrice = "#totalp";
        this.cartButton = "#cartur";
        this.modal = "div#orderModal>div>div";
        this.purchaseButton = "button[onclick='purchaseOrder()']";
    }

    navigateToCart() {
        cy.get(this.cartButton).click();
    }
    orderInCart() {
        cy.fixture("demoblaze.json").then((data) => {
        cy.get(this.productContainer).contains(data.product1).should("exist");
        cy.get(this.productContainer).contains(this.deleteButton).should("exist");
        cy.get(this.totalPrice).should("exist");
        cy.get(this.Order).should("be.disabled");
       })
    }

    placeOrder() {
        cy.fixture("demoblaze.json").then((data) => {
        cy.get(".btn.btn-success").click();
        cy.get("div#orderModal>div>div").should("be.visible");
        cy.get("#name").type(data.username);
        cy.get("#country").type(data.country);
        cy.get("#city").type(data.city);
        cy.get("#card").type(data.card);
        cy.get("#month").type("April");
        cy.get("#year").type("2025");
        cy.get(this.purchaseButton).click();
    })
    }


    deleteOrder() {

    }
        
}
export default demoblazeCart;
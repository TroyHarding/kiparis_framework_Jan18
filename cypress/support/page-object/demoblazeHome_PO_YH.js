/// <reference types="cypress" />

class demoblazeHome {
    constructor() {
      this.loginButton = "#login2";
      this.usernameInput = "#loginusername";
      this.passwordInput = "#loginpassword";
      this.loginButtonModal = "button[onclick='logIn()']";
      this.email = "Email: demo@blazemeter.com";
      this.adress = "Address: 2390 El Camino Real";
      this.phone = "Phone: +440 123456";
    }
  
    loginValid() {
      cy.fixture("demoblaze.json").then((data) => {
        cy.visit(data.baseUrl);
        cy.get(this.loginButton).click();
        cy.get(this.usernameInput).type(data.username);
        cy.get(this.passwordInput).type(data.password);
        cy.get(this.loginButtonModal).click();
      });
    }
    headerFooterVerification(){
      cy.get("#nava").contains("PRODUCT STORE").should("exist");
      cy.get("#navbarExample").contains("Home").should("exist");
      cy.get("#navbarExample").contains("Contact").should("exist");
      cy.get("#navbarExample").contains("About us").should("exist");
      cy.get("#navbarExample").contains("Cart").should("exist");
      cy.get("#navbarExample").contains("Log out").should("exist");
      cy.get("#navbarExample").contains("Welcome YH").should("exist");
      cy.get("#footc").contains("About Us").should("exist");
      cy.get("#footc").contains("Get in Touch").should("exist");
      cy.get("#footc").contains("PRODUCT STORE").should("exist");
      cy.get("#footc").contains(this.email).should("exist");
      cy.get("#footc").contains(this.adress).should("exist");
      cy.get("#footc").contains(this.phone).should("exist");
     
    }
    filterproduct(product){
      switch (product) {
        case 'Laptop':
          console.log("This is a laptop");
          cy.get("a#itemc.list-group-item").contains('Laptop').click();
          break;
        case 'Phone':
          console.log("This is a Phone");
          cy.get("a#itemc.list-group-item").contains('Phone').click();
          break;
        case 'Monitors':
          console.log("This is a Monitor");
          cy.get("a#itemc.list-group-item").contains('Monitors').click();
          break;
        default:
          console.log("This Ain't it");
          break;
          
      }
      // cy.get("#tbodyid").contains("MacBook Pro").should("exist");
      
    }
  }
  
  export default demoblazeHome;
  
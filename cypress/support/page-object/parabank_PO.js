/// <reference types="cypress" />

class parabank_PO {
    constructor(){
this.userName = "input[type='text']";
this.password = "input[type='password']";
this.loginButton = "input[type='submit']";



    }

    login() {
        cy.fixture("parabankJane.json").then((data) =>{
            cy.visit(data.BaseUrl);
            cy.get(userName).type(data.registerUser.userName);
            cy.get(password).type(data.registerUser.password);
            cy.get(loginButton).click();


    });
        }

        // openNewAccount(){



        // }
}
export default parabank_PO 
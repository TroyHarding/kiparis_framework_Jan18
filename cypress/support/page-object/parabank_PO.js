/// <reference types="cypress" />

class parabank {
    constructor(){
this.userName = "input[type='text']";
this.password = "input[type='password']";
this.loginButton = "input[type='submit']";
this.choice = "select[id='type']";
this.checking = "option[value='0']";
this.saving = "option[value='1']";


    }

    login() {
        cy.fixture("parabankJane.json").then((data) =>{
            cy.visit(data.BaseUrl);
            cy.get(userName).type(data.registerUser.userName);
            cy.get(password).type(data.registerUser.password);
            cy.get(choice).click();
            cy.get(checking).click();


    });
    }
}
export default parabank
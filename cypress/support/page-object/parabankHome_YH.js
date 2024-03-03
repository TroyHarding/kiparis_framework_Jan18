class HomePage{
    logIn(){
        cy.fixture("parabank_YH.json").then((data) =>{
          cy.visit(data.baseUrl);
          cy.get(data.userNameField).type(data.validUser.userName);  
          cy.get(data.passwordField).type(data.validUser.password);  
          cy.get(data.logInButton).click();
        }
        )
    }
}

export default HomePage;
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
    verifyLeftMenu(){
      cy.fixture("parabank_YH.json").then((data) =>{
        cy.get(data.leftMenu).should('contain', 'Solutions');
        cy.get(data.leftMenu).should('contain', 'About Us');
        cy.get(data.leftMenu).should('contain', 'Services');
        cy.get(data.leftMenu).should('contain', 'Products');
        cy.get(data.leftMenu).should('contain', 'Locations');
        cy.get(data.leftMenu).should('contain', 'Admin Page');
      })
    }
    verifyAccountServices(){
      cy.fixture("parabank_YH.json").then((data) =>{
        cy.get(data.accountName).should('contain', 'Yuliia Haponenko');
        cy.get(data.leftPanel).should('contain', 'Open New Account');
        cy.get(data.leftPanel).should('contain', 'Accounts Overview');
        cy.get(data.leftPanel).should('contain', 'Transfer Funds');
        cy.get(data.leftPanel).should('contain', 'Bill Pay');
        cy.get(data.leftPanel).should('contain', 'Find Transactions');
        cy.get(data.leftPanel).should('contain', 'Update Contact Info');
        cy.get(data.leftPanel).should('contain', 'Request Loan');
        cy.get(data.leftPanel).should('contain', 'Find Transactions');
      })
    }

    openAccount(accountType){
      cy.fixture("parabank_YH.json").then((data) =>{
      cy.get(data.openAccountButton).click();
      cy.get(data.formForNewAcccount).should("exist");
      cy.get('select').select("option[value='0']").should('have.value', '0')
      // cy.get(data.accountType).click();
      // if(accountType == "CHECKING"){
      //    cy.get(data.checking).click();
      // }else{
      //     cy.get(data.saving).click();
      

      
    })
  }

}
export default HomePage;

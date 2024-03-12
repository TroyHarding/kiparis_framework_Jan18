/// <reference types="cypress" />

class parabank_PO {

  constructor() {
    this.firstName = "input[id='customer.firstName']";
    this.lastName = "input[id='customer.lastName']";
    this.addrStr = "input[id='customer.address.street']";
    this.addrCity = "input[id='customer.address.city']";
    this.addrState = "input[id='customer.address.state']";
    this.addrZip = "input[id='customer.address.zipCode']";
    this.phoneNum = "input[id='customer.phoneNumber']";
    this.ssn = "input[id='customer.ssn']";
    this.userName = "input[id='customer.username']";
    this.password = "input[id='customer.password']";
    this.confirmPsw = "input[id='repeatedPassword']";
    this.submitReg = "td > input[type='submit']";
    this.successMsg = "div > p";
    this.userLog = "input[type='text']";
    this.pwdLog = "input[type='password']";
    this.submitLog = "div > input[type='submit']";
    this.openAcc = "a[href='/parabank/openaccount.htm']";
    this.accDd = "select#type";
    this.accOpt = "select#type option";
    this.btnOpenAcc = "input[value='Open New Account']";
    this.newAccID = "a[id='newAccountId']";
    this.accType = "td[id='accountType']";
    this.transfer = "a[href='/parabank/transfer.htm']";
    this.amount = "input[id='amount']";
    this.fromAcc = "select#fromAccountId";
    this.toAcc = "select#toAccountId";
    this.submitTransfer = "input[value='Transfer']";
    this.resultTransfer = "div[ng-if='showResult']";
  }

  register() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.firstName).type(data.user.firstName);
      cy.get(this.lastName).type(data.user.lastName);
      cy.get(this.addrStr).type(data.user.street);
      cy.get(this.addrCity).type(data.user.city);
      cy.get(this.addrState).type(data.user.state);
      cy.get(this.addrZip).type(data.user.zip);
      cy.get(this.phoneNum).type(data.user.phone);
      cy.get(this.ssn).type(data.user.ssn);
      cy.get(this.userName).type(data.user.user);
      cy.get(this.password).type(data.user.pwd);
      cy.get(this.confirmPsw).type(data.user.pwd);
      cy.get(this.submitReg).click();
      // cy.get(this.successMsg).should("contain", data.success);
    });
  }

  login() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.userLog).type(data.user.user);
      cy.get(this.pwdLog).type(data.user.pwd);
      cy.get(this.submitLog).click();
    });
  }
  open_new_account() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.openAcc).click();
      cy.get(this.accDd).invoke("val", "1").trigger("change");
      cy.get(this.btnOpenAcc).click();
      // cy.get("p").should(
      //   "contain",
      //   "Congratulations, your account is now open."
      // );
      // cy.get(this.newAccID).click();
      // cy.get(this.accType).should("contain", "SAVINGS");
    });
  }

  transfer_funds_min() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.transfer).click();
      cy.get(this.amount).type(data.sumMin);
      cy.get(this.fromAcc)
        .find("option")
        .eq(1)
        .then(($option) => {
          const optionText = $option.text();
          cy.get(this.fromAcc).select(optionText);
        });
      cy.get(this.toAcc)
        .find("option")
        .eq(0)
        .then(($option) => {
          const optionText = $option.text();
          cy.get(this.toAcc).select(optionText);
        });
      cy.get(this.submitTransfer).click();
      cy.get(this.resultTransfer).should("contain", "Transfer Complete!");
    });
  }

  transfer_funds_max() {
    cy.fixture("parabank_Leo.json").then((data) => {
      cy.get(this.transfer).click();
      cy.get(this.amount).type(data.sumMax);
      cy.get(this.fromAcc)
        .find("option")
        .eq(1)
        .then(($option) => {
          const optionText = $option.text();
          cy.get(this.fromAcc).select(optionText);
        });
      cy.get(this.toAcc)
        .find("option")
        .eq(0)
        .then(($option) => {
          const optionText = $option.text();
          cy.get(this.toAcc).select(optionText);
        });
      cy.get(this.submitTransfer).click();
      cy.get(this.resultTransfer).should("contain", "Transfer Complete!");
    });
  }

    registerUser() {
      cy.fixture("parabank_Nadiia.json").then((data) => {
        cy.get(this.firstName).type(data.user.firstName);
        cy.get(this.lastName).type(data.user.lastName);
        cy.get(this.addrStr).type(data.user.street);
        cy.get(this.addrCity).type(data.user.city);
        cy.get(this.addrState).type(data.user.state);
        cy.get(this.addrZip).type(data.user.zip);
        cy.get(this.phoneNum).type(data.user.phone);
        cy.get(this.ssn).type(data.user.ssn);
        cy.get(this.userName).type(data.user.user);
        cy.get(this.password).type(data.user.pwd);
        cy.get(this.confirmPsw).type(data.user.pwd);
        cy.get(this.submitReg).click();
        cy.get(this.successMsg).should("contain", data.success);
      });
    }
  
  
    loginUser() {
      cy.fixture("parabank_Nadiia.json").then((data) => {
        cy.get(this.userLog).type(data.user.user);
        cy.get(this.pwdLog).type(data.user.pwd);
        cy.get(this.submitLog).click();
      });
    }
    open_new_account1() {
      cy.fixture("parabank_Nadiia.json").then((data) => {
        cy.get(this.openAcc).click();
        cy.get(this.accDd).invoke("val", "1").trigger("change");
        cy.get(this.btnOpenAcc).click();
        cy.get("p").should(
          "contain",
          "Congratulations, your account is now open."
        );
        cy.get(this.newAccID).click();
        cy.get(this.accType).should("contain", "SAVINGS");
      });
    }
  
    transfer_funds_min() {
      cy.fixture("parabank_Nadiia.json").then((data) => {
        cy.get(this.transfer).click();
        cy.get(this.amount).type(data.sumMin);
        cy.get(this.fromAcc)
          .find("option")
          .eq(1)
          .then(($option) => {
            const optionText = $option.text();
            cy.get(this.fromAcc).select(optionText);
          });
        cy.get(this.toAcc)
          .find("option")
          .eq(0)
          .then(($option) => {
            const optionText = $option.text();
            cy.get(this.toAcc).select(optionText);
          });
        cy.get(this.submitTransfer).click();
        cy.get(this.resultTransfer).should("contain", "Transfer Complete!");
      });
    }
  
    transfer_funds_max() {
      cy.fixture("parabank_Nadiia.json").then((data) => {
        cy.get(this.transfer).click();
        cy.get(this.amount).type(data.sumMax);
        cy.get(this.fromAcc)
          .find("option")
          .eq(1)
          .then(($option) => {
            const optionText = $option.text();
            cy.get(this.fromAcc).select(optionText);
          });
        cy.get(this.toAcc)
          .find("option")
          .eq(0)
          .then(($option) => {
            const optionText = $option.text();
            cy.get(this.toAcc).select(optionText);
          });
        cy.get(this.submitTransfer).click();
        cy.get(this.resultTransfer).should("contain", "Transfer Complete!");
      });
  }
  logIn() {
    cy.fixture("parabank_YH.json").then((data) => {
      cy.get(data.userNameField).type(data.validUser.userName);
      cy.get(data.passwordField).type(data.validUser.password);
      cy.get(data.logInButton).click();
    });
  }
  verifyLeftMenu() {
    cy.fixture("parabank_YH.json").then((data) => {
      cy.get(data.leftMenu).should("contain", "Solutions");
      cy.get(data.leftMenu).should("contain", "About Us");
      cy.get(data.leftMenu).should("contain", "Services");
      cy.get(data.leftMenu).should("contain", "Products");
      cy.get(data.leftMenu).should("contain", "Locations");
      cy.get(data.leftMenu).should("contain", "Admin Page");
    });
  }
  verifyAccountServices() {
    cy.fixture("parabank_YH.json").then((data) => {
      cy.get(data.accountName).should("contain", "Yuliia Haponenko");
      cy.get(data.leftPanel).should("contain", "Open New Account");
      cy.get(data.leftPanel).should("contain", "Accounts Overview");
      cy.get(data.leftPanel).should("contain", "Transfer Funds");
      cy.get(data.leftPanel).should("contain", "Bill Pay");
      cy.get(data.leftPanel).should("contain", "Find Transactions");
      cy.get(data.leftPanel).should("contain", "Update Contact Info");
      cy.get(data.leftPanel).should("contain", "Request Loan");
      cy.get(data.leftPanel).should("contain", "Find Transactions");
    });
  }

  openAccount(account) {
    cy.fixture("parabank_YH.json").then((data) => {
      cy.get(data.openAccountButton).click();
      cy.get(data.formForNewAcccount).should("exist");
      switch (account) {
        case "CHECKING":
          cy.log("checking");
          cy.get("select#type").invoke("val", "1").trigger("change");
          break;
        case "SAVINGS":
          cy.get("select#type").invoke("val", "0").trigger("change");
          cy.log("checking");
          break;
      }

      cy.get("input[type='submit']").click();
      cy.timeout(20000);
      cy.get("input[type='submit']").click();
      cy.timeout(20000);
    });
  }
  verifyAccountOpened() {
    cy.fixture("parabank_YH.json").then((data) => {
      cy.get(data.createdAccount).contains("Account Opened!");
      cy.get(data.accountIdBox).invoke("text").should("not.be.empty");
    });
  }
  registerNewUser(){
    cy.fixture("parabank_YH.json").then((data) => {
    cy.get(data.registerButton).click();
    cy.get(data.inputfirstName).type(data.registerUser.mainName);
    cy.get(data.inputlastName).type(data.registerUser.lastName);
    cy.get(data.inputStreet).type(data.registerUser.street);
    cy.get(data.inputCity).type(data.registerUser.cityName);
    cy.get(data.inputState).type(data.registerUser.state);
    cy.get(data.inputZip).type(data.registerUser.zip);
    cy.get(data.inputphoneNum).type(data.registerUser.phoneNumber);
    cy.get(data.inputSsn).type(data.registerUser.ssn);
    cy.get(data.inputUserName).type(data.registerUser.userFullName);
    cy.get(data.inputPassword).type(data.registerUser.passwordReg);
    cy.get(data.inputConfirmPassword).type(data.registerUser.confirmPassword);
    cy.get(data.submitRegistartionButton).click();
    cy.get(data.successMsg).should("contain", data.success);
  })
}
verifyUserExists(){
  cy.fixture("parabank_YH.json").then((data) => {
  cy.get(data.successMsg).should('contain', data.success);
  
  
  })
}
}

export default parabank_PO;


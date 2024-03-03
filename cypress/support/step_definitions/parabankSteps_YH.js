    /// <reference types="cypress" />
    import {
        Given,
        When,
        Then,
        
      } from "@badeball/cypress-cucumber-preprocessor";
      import "cypress-iframe";
      import parabankHome_YH from "../page-object/parabankHome_YH";

      Given ( 'I log in to parabank with valid Account', () => {
            let lg = new parabankHome_YH();
            lg.logIn();
            lg.verifyAccountServices();
            lg.verifyLeftMenu();
      })

      Then ('I open new {string} Account', (accountType) => {
            let open = new parabankHome_YH();
            open.openAccount();          
      })



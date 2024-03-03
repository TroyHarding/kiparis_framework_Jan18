    /// <reference types="cypress" />
    import {
        Given,
        When,
        Then,
        And,
      } from "@badeball/cypress-cucumber-preprocessor";
      import "cypress-iframe";
      import parabankHome_YH from "../page-object/parabankHome_YH";

      Given ( 'I log in to parabank with valid Account', () => {
            let lg = new parabankHome_YH();
            lg.logIn();
      })

      Then ('I open new Account', () =>{
            
      })



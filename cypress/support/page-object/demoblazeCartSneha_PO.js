/// <reference types="cypress" />

class demoblazeCart{
    constructor() {
        //elements
        this.header = "div[class='col-lg-8'] h2";
        this.placeOrder = ".btn.btn-success";
        this.deleteButton = "a[onclick*=deleteItem]";
        this.productContainer = "#tbodyid > tr > td"
        this.totalPrice = "#totalp";
    }




}
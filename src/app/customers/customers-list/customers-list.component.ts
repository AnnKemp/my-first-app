import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../shared/interfaces";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit{
  filteredCustomers: ICustomer[]=[];
  customersOrderTotal: number;
  currency:string='USD';

  constructor(){}

  ngOnInit(){

  }
  // om het totaal te berekenen dus customersOrderTotal
  calculateOrders() {
    this.customersOrderTotal = 0; // initialiseren
    this.filteredCustomers.forEach((cust: ICustomer) => { // alle customers aflopen via een foreach loop
      this.customersOrderTotal += cust.orderTotal; // de totalen optellen
    });
  }
}


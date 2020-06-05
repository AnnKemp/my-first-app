import { Component, OnInit, Input } from '@angular/core';
import {ICustomer} from "../../shared/interfaces";

@Component({ // decorators are always functions!
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit{
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }
  //@Input() customers: any[]; // is ook nen decorator én een input property
  filteredCustomers: ICustomer[]=[];
  customersOrderTotal: number;
  currencyCode:string='USD';

  constructor(){}

    ngOnInit() {

    }
  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(data) > -1;
      });
    } else {
      this.filteredCustomers = this.customers; // to show the default list without searching
    }
    this.calculateOrders();  // to show the total of the shown customers-> pricetotal
  }
  /*ngOnChanges(changes: SimpleChanges // you import SimpleChanges on top) {
    // is possible to use it in combination with the @Input property to listen to the input to detect any changes and then react on that but if you have only one property to watch on change then there is a better technique ->
  }*/
  // om het totaal te berekenen dus customersOrderTotal
  calculateOrders() {
    this.customersOrderTotal = 0; // initialiseren
    this.filteredCustomers.forEach((cust: ICustomer) => { // alle customers aflopen via een foreach loop
      this.customersOrderTotal += cust.orderTotal; // de totalen optellen
    });
  }
  sort(prop: string) { // hier kan je sorteren in de lijst op header: bijv.: naam of
    // A sorter service will handle the sorting
  }
}

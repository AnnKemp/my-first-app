import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit{
  filteredCustomers: any[]=[];
  customersOrderTotal: number;
  currency
  constructor(){}

  ngOnInit(){

  }

}
// hier was ik gebleven op deze pagina

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit{
  title: string;
  people: any[];

  constructor(){}

  ngOnInit(){
      this.title="Customers";
      this.people =[
        { id:1, name:'John Doe', city:'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)},
        { id:2, name: "Jane Doe", city:"Chandler", orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      ];
  }

}

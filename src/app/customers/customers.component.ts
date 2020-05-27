import { Component, OnInit } from '@angular/core';
import { ICustomer } from "../shared/interfaces";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit{
  title: string;
  people: ICustomer[];
  isVisible: true;
/* // de onderstaande is maar een voorbeeld en werkt niet helemaal geeft foutmeldingen
  changeVisibility() {
    this.isVisible = !this.isVisible; // deze geeft ergens een fout is niet volledig
  }*/
  constructor(){}

  ngOnInit(){
      this.title="Customers";
      this.people =[
        { id:1, name:'John Doe', city:'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)},
        { id:2, name: "Jane Doe", city:"Chandler", orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      ];
  }

}
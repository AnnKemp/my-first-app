import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 // title = 'my-first-app';
  title:string; // dit zou typescript moeten zijn
constructor() { }

ngOnInit() {
  // we call a service that gets us the data     that comes later
  this.title="Hello world";
}

}

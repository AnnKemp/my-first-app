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
  this.title="Hello world using Data binding";
}

}

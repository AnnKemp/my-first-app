import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-customers></app-customers>`
})
export class AppComponent implements OnInit{
 // title = 'my-first-app';
 // title:string; // dit is typescript
constructor() { }

ngOnInit() {
  // we call a service that gets us the data     that comes later
  //this.title="Hello world";
}

}

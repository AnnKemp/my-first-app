import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// CustomersModule moet hier aangeroepen wil ie werken
import { CustomersModule} from "./customers/customers.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // bij imports ook de CustomersModule bijvoegen
    BrowserModule,
    AppRoutingModule, CustomersModule, SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Sideline notatie:
Dit is een van de build-in directives van Angular, je hebt er zo een aantal:
ngFor (voor een for-lus te maken), ngIf (voor een voorwaarde te stellen):
<div *ngIf="customer">{{ customer.details }}</div> // ngIf stelt conditie
<div *ngFor="let customer of customers"></div>

ngClass (voor een classe te veranderen), ngStyle en ngModel:
<span [ngClass]="{active: isActive, icon: showIcon }">{{ customer.firstname }}</span>
 <input type="text" [(ngModel)]="customer.name" />
// dus de vierkante haakjes wijzen op een eigenschap en wijzen de waarde van de input toe aan de input (value) maar de ronde haakjes wijzen dan op een event-functie en zorgen ervoor dat de data die ingetypt wordt onmiddellijk getoont wordt en blijft staan in de input
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// CustomersModule moet hier aangeroepen wil ie werken
import { CustomersModule} from "./customers/customers.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // bij imports ook de CustomersModule bijvoegen
    BrowserModule,
    AppRoutingModule, CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

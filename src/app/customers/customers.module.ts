/* in de plaats van het customercomponent bij te voegen bij app.moduel.ts zoals normaal doen we dat nu niet omdat dit een vrij groot ding gaat worden en die krijgt een pagina van zichzelf,
Dus we maken een customermodule voor al de customerscomponenten in te steken/ of om deze aan te roepen en dan moet deze customersmodule nog een aangeroepen worden door de app.module.ts wil ie werken, wil de keten volledig zijn; anders doet ie niets */

import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent }  from './customers.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomersComponent],
  exports: [
    CustomersComponent
  ]
})
export class CustomersModule { }

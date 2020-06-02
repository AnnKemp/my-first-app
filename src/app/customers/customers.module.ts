/* in de plaats van het customercomponent bij te voegen bij app.module.ts zoals we normaal doen, doen we dat nu niet omdat dit een vrij groot ding gaat worden en die krijgt een pagina van zichzelf,
Dus we maken een customermodule voor al de customerscomponenten in te steken/ of om deze aan te roepen en dan moet deze customersmodule nog eens aangeroepen worden door de app.module.ts wil ie werken, wil de keten volledig zijn; anders doet ie niets */

import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent }  from './customers.component';
import { CustomersListComponent }  from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textboxcomponent';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  exports: [
    CustomersComponent
  ]
})
export class CustomersModule { }

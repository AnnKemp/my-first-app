/* in de plaats van het customercomponent bij te voegen bij app.moduel.ts zoals normaal doen we dat nu niet omdat dit een vrij groot ding gaat worden en die krijgt een pagina van zichzelf */
import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent }  from './customers.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomersComponent ],
})
export class AppModule { }

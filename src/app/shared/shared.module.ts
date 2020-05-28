import { NgModule } from '@angular/core';
import { CapitalizePipe } from "./capitalize.pipe";

// een shared module is om dingen door de applicatie heen te delen, zoals pipes en 'directive' , die zet je dan niet in de customersmap maar in een gedeelde module, de shared map/module.

@NgModule({ // it's called decorator and is imported on top of this page
  declarations: [ CapitalizePipe ], // declarations: so what's in this module
  exports: [ CapitalizePipe ] // to make public so that any module that imports this one can also reach whatever is exported here.
})
export class SharedModule { } // here we export this module so make it content public/share with the other modules, instead of using it private

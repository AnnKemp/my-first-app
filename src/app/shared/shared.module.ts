import { NgModule } from '@angular/core';
// een shared module is om dingen door de applicatie heen te delen, zoals pipes (dat weet ik nog niet wat dat is) en 'directive' , die zet je dan niet in de customersmap maar in een gedeelde module, de shared map/module.

@NgModule({ // it's called decorator and is imported on top of this page
  declarations: [  ], // declarations: so what's in this module
  exports: [  ] // to make public so that any module that imports this one can also reach whatever is exported here.
})
export class SharedModule { }

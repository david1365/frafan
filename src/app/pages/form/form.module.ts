import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';

import { FormComponent } from './form.component';


@NgModule({
  imports: [FormRoutingModule],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule { }

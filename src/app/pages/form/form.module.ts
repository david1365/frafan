import {NgModule} from '@angular/core';

import {FormRoutingModule} from './form-routing.module';

import {FormComponent} from './form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule {
}

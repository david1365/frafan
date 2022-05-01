import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';

import { FormComponent } from './form.component';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  imports: [
    FormRoutingModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule
  ],
  declarations: [FormComponent],
  exports: [FormComponent]
})
export class FormModule {
}

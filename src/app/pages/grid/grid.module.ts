import {NgModule} from '@angular/core';

import {GridRoutingModule} from './grid-routing.module';

import {GridComponent} from './grid.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  imports: [
    GridRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule {
}

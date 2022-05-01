import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";

@Component({
  selector: 'app-welcome',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  columnDefs: ColDef[] = [
    {field: 'make', sortable: true, filter: true},
    {field: 'model', sortable: true, filter: true},
    {field: 'price', sortable: true, filter: true}
  ];

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxster', price: 72000}
  ];
}

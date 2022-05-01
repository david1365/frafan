import {NgModule} from '@angular/core';

import {FlowchartComponent} from './flowchart.component';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {FlowchartRoutingModule} from "./flowchart-routing.module";


@NgModule({
  imports: [
    FlowchartRoutingModule,
    NgxGraphModule
  ],
  declarations: [FlowchartComponent],
  exports: [FlowchartComponent]
})
export class FlowchartModule {
}

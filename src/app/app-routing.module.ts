import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/welcome'},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)},
  {path: 'grid', loadChildren: () => import('./pages/grid/grid.module').then(m => m.GridModule)},
  {path: 'flowChart', loadChildren: () => import('./pages/flowchart/flowchart.module').then(m => m.FlowchartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

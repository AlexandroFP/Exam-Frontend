import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOptionComponent } from './features/view-option/view-option.component';

const routes: Routes = [
  { path: '', component: ViewOptionComponent }, // Ruta principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

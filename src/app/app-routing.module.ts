import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './templatedriven/template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactiveform/reactive-form/reactive-form.component';
import { BindingsComponent } from './bindings/bindings.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';

const routes: Routes = [
  {
    path:'',
    component: RestaurantDashComponent
  },
  {
    path:'templatedriven',
    component: TemplateDrivenComponent
  },
  {
    path:'reactiveform',
    component: ReactiveFormComponent
  },
  {
    path:'bindingform/:id',
    component: BindingsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './templatedriven/template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactiveform/reactive-form/reactive-form.component';
import { BindingsComponent } from './bindings/bindings.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { CustomepipesComponent } from './customepipes/customepipes.component';
import { NestedroutingComponent } from './nestedrouting/nestedrouting.component';
import { LaptopComponent } from './nestedrouting/laptop/laptop.component';

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
  {
    path:'admin', loadChildren:()=>import('./lazyLoading/admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'customepipe',
    component: CustomepipesComponent
  },
  {
    path:'nestedrouting',
    children:[
      {
        path:'',
        component:NestedroutingComponent
      },
      {
      path:'laptop',
      component:LaptopComponent
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

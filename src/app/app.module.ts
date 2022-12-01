import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BindingsComponent } from './bindings/bindings.component';
import { RedelDirective } from './bindings/redel.directive';
import { ChildComponentComponent } from './childtoparentcomm/child-component/child-component.component';
import { TemplateDrivenComponent } from './templatedriven/template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactiveform/reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    RestaurantDashComponent,
    BindingsComponent,
    RedelDirective,
    ChildComponentComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent {
  formValue! : FormGroup
 constructor(private formBuilder:FormBuilder){}

 ngOnInit () : void {
   this.formValue = this.formBuilder.group({
    name:[''],
    email:[''],
    mobile:[''],
    address:[''],
    service:['']
   })
 }
}

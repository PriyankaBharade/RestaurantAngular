import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  userLogin(){
    console.log(this.loginForm.value)
  }
}

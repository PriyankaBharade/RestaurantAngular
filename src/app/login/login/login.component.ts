import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //loginForm!: FormGroup
  constructor(private formBuilder:FormBuilder,
     private router:Router,
     private userDataService:UserdataService){

  }

  ngOnInit(){
    // this.loginForm = this.formBuilder.group({
    //   email:[''],
    //   password:['']
    // })
  }

  login(item:any){
   this.userDataService.login().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === item.value.email
        && a.password === item.value.password
      })
      if(user){
        alert("Login Successfully");
       // this.item.reset()
        this.router.navigate(['/'])
      }else {
        alert("Please Enter valid Username and password");
      }
    })
  }

  // login(){
  //   this.httpClient.get<any>("http://localhost:3000/signup").subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.loginForm.value.email 
  //       && a.password === this.loginForm.value.password
  //     })
  //     if(user){
  //       alert("Login Successfully");
  //       this.loginForm.reset()
  //       this.router.navigate(['/'])
  //     }
  //   })
  // }
}

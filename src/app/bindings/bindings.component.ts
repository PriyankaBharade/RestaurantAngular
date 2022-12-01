import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  title ='Binding Demo'
  name=''
  pass=''
  credentials = {username: '', password: ''};

  // propertyBinding
  proBinding ='Peter'
  proDisable = false

  // ngIf-Else
  show = true

  // ngFor
  users = ['Test1','Test2','Test3','Test4']

  //Pipes
  date = Date()

  constructor(private route: ActivatedRoute){

  }

  // Route Param
  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     console.log('The id of this route is: ', params['id']);
  //   });
  // }

    // Query Param
  notify: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['success'] === 'true') {
        this.notify = 'You have passed data';
      }
    });
  }
  
  onKeyUserName(value :any){
    this.name = value.target.value
  }

  

  login() {
    console.log(this.credentials);
  }
}

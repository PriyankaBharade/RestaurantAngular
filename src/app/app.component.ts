import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestaurantApp';

  passDataToChild = 10;

  // Outout Emitter
  updateDataParentToChild(item :String){
    console.log(item)
  }

  //Services
  constructor(private userDataServices:UserdataService){
   console.log(userDataServices.users())
  }
}

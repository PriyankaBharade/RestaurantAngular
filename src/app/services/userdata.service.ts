import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users(){
    return[{name:'User1',age :'28',email:'user1@gmail.com'},
    {name:'User2',age :'24',email:'user2@gmail.com'},
    {name:'User3',age :'57',email:'user3@gmail.com'},
    {name:'User4',age :'98',email:'user4@gmail.com'},
    {name:'User5',age :'32',email:'user5@gmail.com'}]
  }
}

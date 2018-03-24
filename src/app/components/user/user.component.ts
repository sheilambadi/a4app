import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //properties with type associated to them
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;

  constructor() { 
    console.log("Constructor ran...");
    
  }

  ngOnInit() {
    //advised to implement things here
    console.log("ngOnInit ran...");

    //initialize properties
    this.name = "Mbadi Sheila";
    this.age = 22;
    this.email = "mbadisheila@gmail.com";
    this.address = {
      street: '87 cedar groove',
      city: 'Nairobi',
      state: 'Nairobi County'
    }
    this.hobbies = ['Coding', 'Watching movies', 'Listening to music'];
    this.hello = 1;
  }

}

//if object has too many items, create an interface or class to map them out
interface Address{
  street: string,
  city: string,
  state: string
}

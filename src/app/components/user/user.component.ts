import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  posts: Post[];
  isEdit: boolean = false;

  //service dependency injection goes into constructor
  constructor(private dataService:DataService) { 
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

    //using the data service
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  
  }

  //on button click event
  onClick(){
    this.hobbies.push('Cycling');
  }

  addHobby(hobby){
    console.log(hobby);
    //add to the beginning
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

//if object has too many items, create an interface or class to map them out
interface Address{
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: string
}

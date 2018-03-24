import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = 'Sheila Mbadi';

  constructor() { 
    console.log("Constructor ran...");
    
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    
  }

}

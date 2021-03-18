import { Component, OnInit } from '@angular/core';
import 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg!:string;

  constructor() { }

  ngOnInit(): void {
  }
  
  check(username:string, password:string){
    //call function from service to check 
    var output = this.service.checkUserNamePassword(username,password)
    if(output ==true){
      this.routes.navigate(['/admin']);
    } else {
      this.msg = 'Invalid username or password'
    }
  }

}

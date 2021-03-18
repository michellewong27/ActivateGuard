import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  checkUserNamePassword(username:string, password:string){
    //random example
    if(username == 'admin' && password =='admin123'){
      //storing on local storage- setting item username
      localStorage.setItem('username', "admin");
      return true;
    } else {
      return false;
    }
  }

}

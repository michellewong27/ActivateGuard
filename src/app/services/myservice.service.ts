import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  checkUserNamePassword(username:string, password:string){
    if(username == 'admin' && password =='admin123'){
      localStorage.setItem('username', "admin");
      return true;
    } else {
      return false;
    }
  }

}

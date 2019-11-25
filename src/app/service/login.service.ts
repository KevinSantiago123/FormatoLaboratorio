import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../dto/structure_class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private login:HttpClient) { }

  public Login(body:Login) {
    
    return this.login.post("http://127.0.0.1:8088/users/login", body)
    
  }


}



import { Injectable } from '@angular/core';
import { User } from '../dto/structure_class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private registro:HttpClient) { }

  public Registro(body:User) {
    
    return this.registro.post("http://127.0.0.1:8088/users/", body)
    
  }


}


 
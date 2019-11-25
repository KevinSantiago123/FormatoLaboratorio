import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private usuarios:HttpClient) { }

  public Usuarios(): Observable<any> { 
    return this.usuarios.get("http://127.0.0.1:8088/users")
  }
}

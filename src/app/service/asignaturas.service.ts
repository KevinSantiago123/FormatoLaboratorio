import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor(private asignatura:HttpClient) { }

  public Asignatura(): Observable<any> { 
    return this.asignatura.get("http://127.0.0.1:8089/asignaturas")
  }
  
}


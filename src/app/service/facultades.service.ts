import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {

  constructor(private facultad:HttpClient) { }

  public Facultad(): Observable<any> { 
    return this.facultad.get("http://127.0.0.1:8089/facultades")
  }
}

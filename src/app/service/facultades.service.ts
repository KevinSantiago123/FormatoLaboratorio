import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facultades } from '../dto/structure_class';

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {

  constructor(private facultad:HttpClient) { }

  public Facultad(): Observable<any> { 
    return this.facultad.get("http://127.0.0.1:8089/facultades")
  }
  public FacultadCrear(body:Facultades){
      return this.facultad.post("http://127.0.0.1:8089/facultades", body)

  }
}

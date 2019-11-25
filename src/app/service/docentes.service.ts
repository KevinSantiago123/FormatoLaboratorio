import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  constructor(private docente:HttpClient) { }

  public Docentes():Observable<any> {
    return this.docente.get("http://127.0.0.1:8089/docentes")
  }
}
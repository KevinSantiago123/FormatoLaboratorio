import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private solicitudes: HttpClient) { }
  
  public SolicitudesLab(): Observable<any> {
    return this.solicitudes.get("http://127.0.0.1:8081/formularios")
  }

}



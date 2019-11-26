import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloques } from '../dto/structure_class';

@Injectable({
  providedIn: 'root'
})
export class BloquesService {

  constructor(private bloques: HttpClient) { }

  public Bloques(): Observable<any> {
    return this.bloques.get("http://127.0.0.1:8089/bloques")
  }
  public BloquesCrear(body:Bloques){
    return this.bloques.post("http://127.0.0.1:8089/bloques", body)
}
}
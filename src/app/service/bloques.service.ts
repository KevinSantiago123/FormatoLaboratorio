import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloquesService {

  constructor(private bloques: HttpClient) { }

  public Bloques(): Observable<any> {
    return this.bloques.get("http://127.0.0.1:8089/bloques")
  }
}
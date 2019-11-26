import { Injectable } from '@angular/core';
import { Solicitud } from '../dto/structure_class';
import { HttpClient } from '@angular/common/http';

 @Injectable({
   providedIn: 'root'
 })
 export class FormularioLaboratoriosService {

   constructor(private solicitud:HttpClient) { }

   
 public Solicitud(body:Solicitud) {
   
    return this.solicitud.post("http://127.0.0.1:8081/formularios", body)  
  }

 }


 
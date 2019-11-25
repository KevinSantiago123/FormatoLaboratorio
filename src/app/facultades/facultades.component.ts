import { Component, OnInit } from '@angular/core';
import { Facultades } from '../dto/structure_class';
import { FacultadesService } from '../service/facultades.service';

@Component({
  selector: 'app-facultades',
  templateUrl: './facultades.component.html',
  styleUrls: ['./facultades.component.css']
})
export class FacultadesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'ubicacion'];
  facultad: Facultades[];

  constructor(private listaFacultadService: FacultadesService) { 
  }

  ngOnInit(){
    this.ListarFacultades()
  }
  
  ListarFacultades(){
      this.listaFacultadService.Facultad().subscribe(
      (res) => {
        this.facultad = res
        },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}

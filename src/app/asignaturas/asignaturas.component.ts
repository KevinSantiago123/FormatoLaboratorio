import { Component, OnInit } from '@angular/core';
import { Asignaturas } from '../dto/structure_class';
import { AsignaturasService } from '../service/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})

export class AsignaturasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  asignatura: Asignaturas[];

  constructor(private listaAsignaturaService: AsignaturasService) { 
  }
  ngOnInit(){
    this.ListarAsignaturas()
  }
  ListarAsignaturas(){
      this.listaAsignaturaService.Asignatura().subscribe(
      (res) => {
        this.asignatura = res
        },
      (error) => {
        console.log(<any>error);
      }
    )
  }


}

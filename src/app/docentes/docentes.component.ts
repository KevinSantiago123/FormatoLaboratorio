import { Component, OnInit } from '@angular/core';
import { Docentes } from '../dto/structure_class';
import { DocentesService } from '../service/docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  docente: Docentes[];

  constructor(private listaDocentesService: DocentesService) {
  }
  ngOnInit() {
    this.ListarDocentes()
  }
  ListarDocentes() {
    this.listaDocentesService.Docentes().subscribe(
      (res) => {
        this.docente = res
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
}

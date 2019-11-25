import { Component, OnInit } from '@angular/core';
import { Laboratorios } from '../dto/structure_class';
import { LaboratoriosService } from '../service/laboratorios.service';

@Component({
  selector: 'app-laboratorios',
  templateUrl: './laboratorios.component.html',
  styleUrls: ['./laboratorios.component.css']
})
export class LaboratoriosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  laboratorio: Laboratorios[];

  constructor(private listaLaboratorioService: LaboratoriosService) { 
  }

  ngOnInit(){
    this.ListarLaboratorios()
  }
  
  ListarLaboratorios(){
      this.listaLaboratorioService.Laboratorios().subscribe(
      (res) => {
        this.laboratorio = res
        },
      (error) => {
        console.log(<any>error);
      }
    )
  }

}

import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

import { Asignaturas, Laboratorios } from '../dto/structure_class';
import { FormularioLaboratoriosService,FormularioAsignaturasService} from '../service/formulario-laboratorio.service';

@Component({
  selector: 'app-formulario-laboratorio',
  templateUrl: './formulario-laboratorio.component.html',
  styleUrls: ['./formulario-laboratorio.component.css']
})
export class FormularioLaboratorioComponent {
  myLaboratorio = new FormControl();
  myControl = new FormControl();
  asignatura: Asignaturas[];
  laborato: Laboratorios[];

  constructor( 
    public listadoLabService: FormularioLaboratoriosService,
    public listadoAsigbService: FormularioAsignaturasService   
    ) { 
    this.laborato = this.listadoLabService.getLaboratorios();
    this.asignatura = this.listadoAsigbService.getAsignaturas();
    }
     
      
  

}

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
  myAsignatura = new FormControl();
  asignatura: Asignaturas[];
  laborato: Laboratorios[];

  /*Variables checkbox*/ 
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor( 
    public listadoLabService: FormularioLaboratoriosService, public listadoAsigService: FormularioAsignaturasService  
    ) { 
    this.laborato = this.listadoLabService.getLaboratorios();
    this.asignatura = this.listadoAsigService.getAsignaturas();
    }
}
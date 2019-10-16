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
  myControl = new FormControl();
  asignatura: Asignaturas[];
  laborato: Laboratorios[];

  /*Variables checkbox*/ 
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  checked1 = false;
  indeterminate1 = false;
  labelPosition1 = 'after';
  disabled1 = false;

  checked2 = false;
  indeterminate2 = false;
  labelPosition2 = 'after';
  disabled2 = false;

  checked3 = false;
  indeterminate3 = false;
  labelPosition3 = 'after';
  disabled3 = false;

  checked4 = false;
  indeterminate4 = false;
  labelPosition4 = 'after';
  disabled4 = false;

  checked5 = false;
  indeterminate5 = false;
  labelPosition5 = 'after';
  disabled5 = false;

  constructor( 
    private listadoLabService: FormularioLaboratoriosService, private listadoAsigService:FormularioAsignaturasService
    ) { 
    this.laborato = this.listadoLabService.getLaboratorios();
    this.asignatura = this.listadoAsigService.getAsignaturas();

    }
}
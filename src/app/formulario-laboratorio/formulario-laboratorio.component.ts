import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Asignaturas, Laboratorios, Docentes, Facultades } from '../dto/structure_class';
import { AsignaturasService } from '../service/asignaturas.service';
import { LaboratoriosService } from '../service/laboratorios.service';
import { DocentesService } from '../service/docentes.service';
import { FacultadesService } from '../service/facultades.service';

@Component({
  selector: 'app-formulario-laboratorio',
  templateUrl: './formulario-laboratorio.component.html',
  styleUrls: ['./formulario-laboratorio.component.css']
})

export class FormularioLaboratorioComponent implements OnInit {
  myLaboratorio = new FormControl();
  myAsignatura = new FormControl();
  myControl = new FormControl();
  asignatura: Asignaturas[];
  laborato: Laboratorios[];
  docente:Docentes[];
  facultad:Facultades[];

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
    private listadoLabService: LaboratoriosService, private listadoAsigService: AsignaturasService,
    private listadoDocentes:DocentesService, private listadoFacultades:FacultadesService
  ) { }

  ngOnInit() {
    this.ListarAsignaturas()
    this.ListarLaboratorio()
    this.ListarDocentes()
    this.ListarFacultades()
  }

  ListarAsignaturas() {
    this.listadoAsigService.Asignatura().subscribe(
      (res) => {
        this.asignatura = res
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ListarLaboratorio() {
    this.listadoLabService.Laboratorios().subscribe(
      (res) => {
        this.laborato = res
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ListarDocentes() {
    this.listadoDocentes.Docentes().subscribe(
      (res) => {
        this.docente = res
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  ListarFacultades() {
    this.listadoFacultades.Facultad().subscribe(
      (res) => {
        this.facultad = res
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
}
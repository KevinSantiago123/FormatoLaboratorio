import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Asignaturas, Laboratorios, Docentes, Facultades, Solicitud } from '../dto/structure_class';
import { AsignaturasService } from '../service/asignaturas.service';
import { LaboratoriosService } from '../service/laboratorios.service';
import { DocentesService } from '../service/docentes.service';
import { FacultadesService } from '../service/facultades.service';
import { FormularioLaboratoriosService } from '../service/formulario-laboratorio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-laboratorio',
  templateUrl: './formulario-laboratorio.component.html',
  styleUrls: ['./formulario-laboratorio.component.css']
})

export class FormularioLaboratorioComponent implements OnInit {
  id: undefined;
  asignatura: Asignaturas[];
  laborato: Laboratorios[];
  docente: Docentes[];
  facultad: Facultades[];
  bloque="bloque A";
  form: FormGroup
  picker1 = new FormControl();
  myLaboratorio = new FormControl();
  myControl = new FormControl();
  myDocente = new FormControl();
  myPractica = new FormControl();
  myFaculad = new FormControl();
  mybox1 = new FormControl();
  mybox2 = new FormControl();
  mybox3 = new FormControl();
  mybox4 = new FormControl();
  mybox5 = new FormControl();
  cant_est = new FormControl();
  docEntrega = new FormControl();
  recibe = new FormControl();
  observaciones = new FormControl();
  mybox6 = new FormControl();
  horaEntrada = new FormControl();
  horaSalida = new FormControl();
  
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
    private listadoDocentes: DocentesService, private listadoFacultades: FacultadesService,
    private fb: FormBuilder, private enviarsolicitud: FormularioLaboratoriosService, private router: Router
  ) {
    
     this.form = fb.group({
       id: undefined,
       picker1: [null,Validators.compose([Validators.required])],
       picker2: [null,Validators.compose([Validators.required])],
       myLaboratorio: [null,Validators.compose([Validators.required])], 
       myAsignatura: [null,Validators.compose([Validators.required])], 
       myDocente: [null,Validators.compose([Validators.required])],
       myPractica: [null,Validators.compose([Validators.required])], 
       myFaculad: [null,Validators.compose([Validators.required])], 
       bloque: [null,Validators.compose([Validators.required])], 
       mybox1: [null,Validators.compose([Validators.required])], 
       mybox2: [null,Validators.compose([Validators.required])], 
       mybox3: [null,Validators.compose([Validators.required])], 
       mybox4: [null,Validators.compose([Validators.required])], 
       mybox5: [null,Validators.compose([Validators.required])], 
       cantEstudiantes: [null,Validators.compose([Validators.required])],
       docEntrega: [null,Validators.compose([Validators.required])], 
       recibe: [null,Validators.compose([Validators.required])], 
       observaciones: [null,Validators.compose([Validators.required])], 
       mybox6: [null,Validators.compose([Validators.required])], 
       picker3: [null,Validators.compose([Validators.required])], 
       picker4: [null,Validators.compose([Validators.required])]
     })
  }

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

  EnviarSolicitud() {
    this.enviarsolicitud.Solicitud(new Solicitud(
      this.id,
      this.form.value.picker1,
      this.form.value.picker2,
      this.form.value.myLaboratorio, 
      this.form.value.myAsignatura, 
      this.form.value.myDocente, 
      this.form.value.myPractica, 
      this.form.value.myFaculad, 
      this.form.value.bloque, 
      this.form.value.mybox1, 
      this.form.value.mybox2, 
      this.form.value.mybox3, 
      this.form.value.mybox4, 
      this.form.value.mybox5, 
      this.form.value.cantEstudiantes,
      this.form.value.docEntrega, 
      this.form.value.recibe, 
      this.form.value.observaciones, 
      this.form.value.mybox6, 
      this.form.value.picker3, 
      this.form.value.picker4)).subscribe(
      (res) => {
        console.log(res['message']);
        if (res['message'] == 'Laboratorio guardado exitosamente') {
          this.router.navigate(['/opciones']);
        }
        else {
          alert(res['message'])
        }
      },
      (error) => {
        alert(error.error.message)
        console.log(error.error.message);
      }
    )
    // console.log(this.form)
  }
}




import { Component, OnInit } from '@angular/core';
import { Facultades } from '../dto/structure_class';
import { FacultadesService } from '../service/facultades.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-facultades',
  templateUrl: './facultades.component.html',
  styleUrls: ['./facultades.component.css']
})
export class FacultadesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'ubicacion'];
  facultad: Facultades[];

  form: FormGroup
  constructor(private listaFacultadService: FacultadesService, private fb: FormBuilder) {
    this.form = fb.group({
      name: [null, Validators.compose([Validators.required])],
      ubicacion: [null, Validators.compose([Validators.required])]
    })
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

  InsertarFacultad() {
    let newFacultad = new Facultades(
      undefined,
      this.form.value.name,
      this.form.value.ubicacion
      )
    this.listaFacultadService.FacultadCrear(newFacultad).subscribe(
        (res) => {
          this.ListarFacultades()
          alert(res['message'])
          console.log(res['message']);
        },
        (error) => {
          alert(error.error.message)
          console.log(error.error.message);
        }
      )
  }
}




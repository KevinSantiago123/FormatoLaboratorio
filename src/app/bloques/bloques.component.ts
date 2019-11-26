import { Component, OnInit } from '@angular/core';
import { Bloques } from '../dto/structure_class';
import { BloquesService } from '../service/bloques.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bloques',
  templateUrl: './bloques.component.html',
  styleUrls: ['./bloques.component.css']
})
export class BloquesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  bloque: Bloques[];

  form: FormGroup
  constructor(private listaBloquesService: BloquesService, private fb: FormBuilder) {
    this.form = fb.group({
      name: [null, Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.ListarBloques()
  }
  ListarBloques() {
    this.listaBloquesService.Bloques().subscribe(
      (res) => {
        this.bloque = res
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }

  InsertarBloque() {
    let newBloque = new Bloques(
      undefined,
      this.form.value.name
      )
    this.listaBloquesService.BloquesCrear(newBloque).subscribe(
        (res) => {
          this.ListarBloques()
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

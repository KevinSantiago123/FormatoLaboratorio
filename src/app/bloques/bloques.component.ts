import { Component, OnInit } from '@angular/core';
import { Bloques } from '../dto/structure_class';
import { BloquesService } from '../service/bloques.service';

@Component({
  selector: 'app-bloques',
  templateUrl: './bloques.component.html',
  styleUrls: ['./bloques.component.css']
})
export class BloquesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  bloque: Bloques[];

  constructor(private listaBloquesService: BloquesService) {
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
}

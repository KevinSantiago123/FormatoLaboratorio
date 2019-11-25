import { Component, OnInit } from '@angular/core';
import { OpcionesService } from '../service/opciones.service';
import { ContenidoOpciones } from '../dto/structure_class';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {
  options: ContenidoOpciones[];

  constructor(
    private listaOpcionesService: OpcionesService) { 
    this.options = this.listaOpcionesService.getOpciones();
  }
  ngOnInit() {
  }
}

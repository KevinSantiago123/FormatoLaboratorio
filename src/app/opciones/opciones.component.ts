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
  // let user = JSON.parse(sessionStorage.getItem('user'));

  constructor(
    private listaOpcionesService: OpcionesService ) {
    if (sessionStorage.getItem('user') == "1") {
      this.options = this.listaOpcionesService.getOpciones();
    } else{
      this.options = this.listaOpcionesService.getOpciones2();
    }
  }
  ngOnInit() {
  }
}

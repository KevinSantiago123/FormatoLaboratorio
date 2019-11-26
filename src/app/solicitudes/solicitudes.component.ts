import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../dto/structure_class';
import { SolicitudesService } from '../service/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  displayedColumns: string[] = ['fechaSolicitud', 'fechaProgramada','laboratorio','asignatura','docente'];
  solicit: Solicitud[];

  constructor(private listaSolicitudesService: SolicitudesService) { }

  ngOnInit(){
    this.ListarSolicitudes()
  }

  ListarSolicitudes(){
    this.listaSolicitudesService.SolicitudesLab().subscribe(
    (res) => {
      this.solicit = res
      },
    (error) => {
      console.log(<any>error);
    }
  )
}

}

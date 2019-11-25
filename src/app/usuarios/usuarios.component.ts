import { Component, OnInit } from '@angular/core';
import { User } from '../dto/structure_class';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'identificationNumber','names','username','rol'];
  usuario: User[];

  constructor(private listaUsuariosService: UsuariosService) { 
  }

  ngOnInit(){
    this.ListarUsuarios()
  }
  
  ListarUsuarios(){
      this.listaUsuariosService.Usuarios().subscribe(
      (res) => {
        this.usuario = res
        },
      (error) => {
        console.log(<any>error);
      }
    )
  }
}

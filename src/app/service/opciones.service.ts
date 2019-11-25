import { Injectable } from '@angular/core';
import { ContenidoOpciones } from '../dto/structure_class';

@Injectable({
  providedIn: 'root'
})
export class OpcionesService {

  opciones: ContenidoOpciones[] = [
    {tipo: 'Facultades', imagen: 'assets/img/facultad.jpg',descripcion:'Selecciona esta opción si quieres ver las facultades disponibles.',ruta:'/facultades' },
    {tipo: 'Bloques', imagen: 'assets/img/bloques.jpg',descripcion:'Selecciona esta opción si quieres ver los bloques disponibles.',ruta:'/bloques' },
    {tipo: 'Laboratorios', imagen: 'assets/img/laboratorios.jpg',descripcion:'Selecciona esta opción si quieres ver los laboratorios disponibles.',ruta:'/laboratorios' },
    {tipo: 'Docentes', imagen: 'assets/img/docentes.jpg',descripcion:'Selecciona esta opción si quieres ver la lista de docentes disponibles.',ruta:'/docentes' },
    {tipo: 'Asignaturas', imagen: 'assets/img/asignaturas.jpg',descripcion:'Selecciona esta opción si quieres ver las asignaturas disponibles.',ruta:'/asignaturas' },
    {tipo: 'Diligenciar formulario', imagen: 'assets/img/formulario.jpg',descripcion:'Selecciona esta opción si quieres diligenciar un nuevo formulario.',ruta:'/formulario' },
    {tipo: 'Usuarios inscritos', imagen: 'assets/img/usuarios.jpg',descripcion:'Selecciona esta opción si quieres listar todos los usuarios inscritos.',ruta:'/listarusuarios' },
    {tipo: 'Listar solicitudes', imagen: 'assets/img/solicitudes.jpg',descripcion:'Selecciona esta opción si quieres listar todos las solicitudes hechas hasta el momento.',ruta:'/listarsolicitudes'} 
  ];

  constructor() { }

  getOpciones(): ContenidoOpciones[] {
    return this.opciones;
  }
}





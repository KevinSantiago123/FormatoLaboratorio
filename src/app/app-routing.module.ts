import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioLaboratorioComponent } from './formulario-laboratorio/formulario-laboratorio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { OpcionesComponent } from './opciones/opciones.component';
import { FacultadesComponent } from './facultades/facultades.component';
import { BloquesComponent } from './bloques/bloques.component';
import { DocentesComponent } from './docentes/docentes.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';


const routes: Routes = [
  //{path: '', component: AppComponent, redirectTo: ''},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'opciones', component: OpcionesComponent, canActivate: [AuthGuardGuard]},
  {path: 'facultades',component:FacultadesComponent,canActivate:[AuthGuardGuard]},
  {path: 'bloques',component:BloquesComponent,canActivate:[AuthGuardGuard]},
  {path: 'laboratorios',component:LaboratoriosComponent,canActivate:[AuthGuardGuard]},
  {path: 'docentes',component:DocentesComponent,canActivate:[AuthGuardGuard]},
  {path: 'asignaturas',component:AsignaturasComponent,canActivate:[AuthGuardGuard]},
  {path: 'formulario', component: FormularioLaboratorioComponent, canActivate: [AuthGuardGuard]},
  {path: 'listarusuarios', component: UsuariosComponent, canActivate: [AuthGuardGuard]},
  {path: 'listarsolicitudes', component: SolicitudesComponent, canActivate: [AuthGuardGuard]},
  {path: '**', pathMatch: "full", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {enableTracing:true}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*Angular material*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*Service*/
// import {FormularioLaboratoriosService } from './service/formulario-laboratorio.service';


/*Componentes */
import { FormularioLaboratorioComponent } from './formulario-laboratorio/formulario-laboratorio.component';
import { MyComponentModule } from './component-material';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { FacultadesComponent } from './facultades/facultades.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { BloquesComponent } from './bloques/bloques.component';
import { DocentesComponent } from './docentes/docentes.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioLaboratorioComponent,
    LoginComponent,
    RegistroComponent,
    OpcionesComponent,
    FacultadesComponent,
    LaboratoriosComponent,
    BloquesComponent,
    DocentesComponent,
    AsignaturasComponent,
    UsuariosComponent,
    SolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyComponentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

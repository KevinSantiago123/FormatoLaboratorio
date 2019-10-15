import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Angular material*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*Service*/
import { FormularioAsignaturasService,FormularioLaboratoriosService } from './service/formulario-laboratorio.service';

/*Componentes */
import { FormularioLaboratorioComponent } from './formulario-laboratorio/formulario-laboratorio.component';
import { MyComponentModule } from './component-material';

@NgModule({
  declarations: [
    AppComponent,
    FormularioLaboratorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormularioAsignaturasService,FormularioLaboratoriosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

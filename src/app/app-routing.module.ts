import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioLaboratorioComponent } from './formulario-laboratorio/formulario-laboratorio.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'Diligenciar/FormularioLaboratorio', component: FormularioLaboratorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

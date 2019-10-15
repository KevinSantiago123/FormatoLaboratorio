import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLaboratorioComponent } from './formulario-laboratorio.component';

describe('FormularioLaboratorioComponent', () => {
  let component: FormularioLaboratorioComponent;
  let fixture: ComponentFixture<FormularioLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FormularioLaboratorioService } from './formulario-laboratorio.service';

describe('FormularioLaboratorioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularioLaboratorioService = TestBed.get(FormularioLaboratorioService);
    expect(service).toBeTruthy();
  });
});

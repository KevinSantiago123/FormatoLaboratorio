import { TestBed } from '@angular/core/testing';

import { BloquesService } from './bloques.service';

describe('BloquesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloquesService = TestBed.get(BloquesService);
    expect(service).toBeTruthy();
  });
});

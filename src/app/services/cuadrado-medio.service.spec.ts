import { TestBed } from '@angular/core/testing';

import { CuadradoMedioService } from './cuadrado-medio.service';

describe('CuadradoMedioService', () => {
  let service: CuadradoMedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadradoMedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

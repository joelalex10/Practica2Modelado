import { TestBed } from '@angular/core/testing';

import { ProductoMedioService } from './producto-medio.service';

describe('ProductoMedioService', () => {
  let service: ProductoMedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoMedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

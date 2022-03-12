import { TestBed } from '@angular/core/testing';

import { MultiplicativoService } from './multiplicativo.service';

describe('MultiplicativoService', () => {
  let service: MultiplicativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplicativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

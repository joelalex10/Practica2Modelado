import { TestBed } from '@angular/core/testing';

import { LinealService } from './lineal.service';

describe('LinealService', () => {
  let service: LinealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

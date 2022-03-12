import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultiplicativoComponent } from './form-multiplicativo.component';

describe('FormMultiplicativoComponent', () => {
  let component: FormMultiplicativoComponent;
  let fixture: ComponentFixture<FormMultiplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMultiplicativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMultiplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

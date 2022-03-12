import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuadradoMedioComponent } from './form-cuadrado-medio.component';

describe('FormCuadradoMedioComponent', () => {
  let component: FormCuadradoMedioComponent;
  let fixture: ComponentFixture<FormCuadradoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCuadradoMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCuadradoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

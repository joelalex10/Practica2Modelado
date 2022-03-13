import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductoMedioComponent } from './form-producto-medio.component';

describe('FormProductoMedioComponent', () => {
  let component: FormProductoMedioComponent;
  let fixture: ComponentFixture<FormProductoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductoMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

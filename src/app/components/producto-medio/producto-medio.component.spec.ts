import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoMedioComponent } from './producto-medio.component';

describe('ProductoMedioComponent', () => {
  let component: ProductoMedioComponent;
  let fixture: ComponentFixture<ProductoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

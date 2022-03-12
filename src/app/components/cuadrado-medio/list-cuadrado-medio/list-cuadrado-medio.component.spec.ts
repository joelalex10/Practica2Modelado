import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuadradoMedioComponent } from './list-cuadrado-medio.component';

describe('ListCuadradoMedioComponent', () => {
  let component: ListCuadradoMedioComponent;
  let fixture: ComponentFixture<ListCuadradoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCuadradoMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuadradoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

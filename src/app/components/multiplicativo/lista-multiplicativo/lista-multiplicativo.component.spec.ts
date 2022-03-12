import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMultiplicativoComponent } from './lista-multiplicativo.component';

describe('ListaMultiplicativoComponent', () => {
  let component: ListaMultiplicativoComponent;
  let fixture: ComponentFixture<ListaMultiplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMultiplicativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMultiplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

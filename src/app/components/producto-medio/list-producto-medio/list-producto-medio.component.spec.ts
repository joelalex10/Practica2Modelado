import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductoMedioComponent } from './list-producto-medio.component';

describe('ListProductoMedioComponent', () => {
  let component: ListProductoMedioComponent;
  let fixture: ComponentFixture<ListProductoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductoMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicativoComponent } from './multiplicativo.component';

describe('MultiplicativoComponent', () => {
  let component: MultiplicativoComponent;
  let fixture: ComponentFixture<MultiplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

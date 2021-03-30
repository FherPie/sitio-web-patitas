import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogitamientoAdoptarGeneroComponent } from './escogitamiento-adoptar-genero.component';

describe('EscogitamientoAdoptarGeneroComponent', () => {
  let component: EscogitamientoAdoptarGeneroComponent;
  let fixture: ComponentFixture<EscogitamientoAdoptarGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscogitamientoAdoptarGeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscogitamientoAdoptarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

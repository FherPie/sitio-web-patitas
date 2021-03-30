import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogitamientoRolComponent } from './escogitamiento-rol.component';

describe('EscogitamientoRolComponent', () => {
  let component: EscogitamientoRolComponent;
  let fixture: ComponentFixture<EscogitamientoRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscogitamientoRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscogitamientoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

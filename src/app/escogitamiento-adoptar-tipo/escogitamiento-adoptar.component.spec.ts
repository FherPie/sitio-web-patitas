import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogitamientoAdoptarComponent } from './escogitamiento-adoptar.component';

describe('EscogitamientoAdoptarComponent', () => {
  let component: EscogitamientoAdoptarComponent;
  let fixture: ComponentFixture<EscogitamientoAdoptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscogitamientoAdoptarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscogitamientoAdoptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCatalogoComponent } from './vista-catalogo.component';

describe('VistaCatalogoComponent', () => {
  let component: VistaCatalogoComponent;
  let fixture: ComponentFixture<VistaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

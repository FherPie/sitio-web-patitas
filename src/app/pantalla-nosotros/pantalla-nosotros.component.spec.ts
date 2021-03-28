import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaNosotrosComponent } from './pantalla-nosotros.component';

describe('PantallaNosotrosComponent', () => {
  let component: PantallaNosotrosComponent;
  let fixture: ComponentFixture<PantallaNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

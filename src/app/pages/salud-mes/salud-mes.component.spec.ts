import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludMesComponent } from './salud-mes.component';

describe('SaludMesComponent', () => {
  let component: SaludMesComponent;
  let fixture: ComponentFixture<SaludMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludMesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

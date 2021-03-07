import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaCovidComponent } from './linea-covid.component';

describe('LineaCovidComponent', () => {
  let component: LineaCovidComponent;
  let fixture: ComponentFixture<LineaCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

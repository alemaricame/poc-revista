import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuHistoriaNuestraHistoriaComponent } from './tu-historia-nuestra-historia.component';

describe('TuHistoriaNuestraHistoriaComponent', () => {
  let component: TuHistoriaNuestraHistoriaComponent;
  let fixture: ComponentFixture<TuHistoriaNuestraHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuHistoriaNuestraHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuHistoriaNuestraHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

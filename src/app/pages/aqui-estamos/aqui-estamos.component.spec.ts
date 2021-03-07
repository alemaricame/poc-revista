import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquiEstamosComponent } from './aqui-estamos.component';

describe('AquiEstamosComponent', () => {
  let component: AquiEstamosComponent;
  let fixture: ComponentFixture<AquiEstamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquiEstamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquiEstamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

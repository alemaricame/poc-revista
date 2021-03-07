import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosDeCajonComponent } from './los-de-cajon.component';

describe('LosDeCajonComponent', () => {
  let component: LosDeCajonComponent;
  let fixture: ComponentFixture<LosDeCajonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosDeCajonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LosDeCajonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

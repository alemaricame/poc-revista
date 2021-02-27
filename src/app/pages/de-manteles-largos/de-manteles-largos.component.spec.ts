import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeMantelesLargosComponent } from './de-manteles-largos.component';

describe('DeMantelesLargosComponent', () => {
  let component: DeMantelesLargosComponent;
  let fixture: ComponentFixture<DeMantelesLargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeMantelesLargosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeMantelesLargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

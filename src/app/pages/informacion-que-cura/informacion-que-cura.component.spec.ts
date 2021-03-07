import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionQueCuraComponent } from './informacion-que-cura.component';

describe('InformacionQueCuraComponent', () => {
  let component: InformacionQueCuraComponent;
  let fixture: ComponentFixture<InformacionQueCuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionQueCuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionQueCuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

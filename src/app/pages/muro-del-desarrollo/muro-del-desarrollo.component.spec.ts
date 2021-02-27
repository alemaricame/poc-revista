import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuroDelDesarrolloComponent } from './muro-del-desarrollo.component';

describe('MuroDelDesarrolloComponent', () => {
  let component: MuroDelDesarrolloComponent;
  let fixture: ComponentFixture<MuroDelDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuroDelDesarrolloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuroDelDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

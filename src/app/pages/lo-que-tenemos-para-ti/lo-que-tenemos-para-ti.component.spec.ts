import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoQueTenemosParaTiComponent } from './lo-que-tenemos-para-ti.component';

describe('LoQueTenemosParaTiComponent', () => {
  let component: LoQueTenemosParaTiComponent;
  let fixture: ComponentFixture<LoQueTenemosParaTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoQueTenemosParaTiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoQueTenemosParaTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

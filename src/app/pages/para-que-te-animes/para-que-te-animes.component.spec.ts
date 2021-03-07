import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaQueTeAnimesComponent } from './para-que-te-animes.component';

describe('ParaQueTeAnimesComponent', () => {
  let component: ParaQueTeAnimesComponent;
  let fixture: ComponentFixture<ParaQueTeAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaQueTeAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaQueTeAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

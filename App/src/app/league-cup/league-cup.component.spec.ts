import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCupComponent } from './league-cup.component';

describe('LeagueCupComponent', () => {
  let component: LeagueCupComponent;
  let fixture: ComponentFixture<LeagueCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

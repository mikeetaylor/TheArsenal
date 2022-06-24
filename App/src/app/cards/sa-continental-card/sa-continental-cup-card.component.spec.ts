import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAContinentalCupCardComponent } from './sa-continental-cup-card.component';

describe('SAContinentalCupCardComponent', () => {
  let component: SAContinentalCupCardComponent;
  let fixture: ComponentFixture<SAContinentalCupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAContinentalCupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAContinentalCupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAContinentalCupComponent } from './sa-continental-cup.component';

describe('SAContinentalCupComponent', () => {
  let component: SAContinentalCupComponent;
  let fixture: ComponentFixture<SAContinentalCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAContinentalCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAContinentalCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

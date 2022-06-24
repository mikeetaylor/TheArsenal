import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAContinentalCupTableComponent } from './sa-continental-cup-table.component';

describe('League_CupTableComponent', () => {
  let component: SAContinentalCupTableComponent;
  let fixture: ComponentFixture<SAContinentalCupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAContinentalCupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAContinentalCupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

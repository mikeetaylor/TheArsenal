import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCupCardComponent } from './super-cup-card.component';

describe('SuperCupCardComponent', () => {
  let component: SuperCupCardComponent;
  let fixture: ComponentFixture<SuperCupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

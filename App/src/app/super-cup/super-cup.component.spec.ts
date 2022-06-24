import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCupComponent } from './super-cup.component';

describe('SuperCupComponent', () => {
  let component: SuperCupComponent;
  let fixture: ComponentFixture<SuperCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

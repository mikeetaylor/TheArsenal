import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCLCardComponent } from './ucl-card.component';

describe('UCLCardComponent', () => {
  let component: UCLCardComponent;
  let fixture: ComponentFixture<UCLCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCLCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCLCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

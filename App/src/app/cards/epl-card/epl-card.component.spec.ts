import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPLCardComponent } from './epl-card.component';

describe('EPLCardComponent', () => {
  let component: EPLCardComponent;
  let fixture: ComponentFixture<EPLCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPLCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EPLCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

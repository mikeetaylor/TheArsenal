import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaEliteCupCardComponent } from './asia-elite-cup-card.component';

describe('AsiaEliteCupCardComponent', () => {
  let component: AsiaEliteCupCardComponent;
  let fixture: ComponentFixture<AsiaEliteCupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaEliteCupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaEliteCupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

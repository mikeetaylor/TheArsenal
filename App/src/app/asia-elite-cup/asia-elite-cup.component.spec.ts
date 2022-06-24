import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaEliteCupComponent } from './asia-elite-cup.component';

describe('AsiaEliteCupComponent', () => {
  let component: AsiaEliteCupComponent;
  let fixture: ComponentFixture<AsiaEliteCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaEliteCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaEliteCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

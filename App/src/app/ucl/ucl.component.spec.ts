import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCLComponent } from './ucl.component';

describe('UCLComponent', () => {
  let component: UCLComponent;
  let fixture: ComponentFixture<UCLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

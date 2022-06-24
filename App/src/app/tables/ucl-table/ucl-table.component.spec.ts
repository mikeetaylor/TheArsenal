import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCLTableComponent } from './ucl-table.component';

describe('UCLTableComponent', () => {
  let component: UCLTableComponent;
  let fixture: ComponentFixture<UCLTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCLTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCLTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

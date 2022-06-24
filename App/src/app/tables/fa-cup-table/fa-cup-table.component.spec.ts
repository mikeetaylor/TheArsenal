import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FACupTableComponent } from './fa-cup-table.component';

describe('FACupTableComponent', () => {
  let component: FACupTableComponent;
  let fixture: ComponentFixture<FACupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FACupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FACupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

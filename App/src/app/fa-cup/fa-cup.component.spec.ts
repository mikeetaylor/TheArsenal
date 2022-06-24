import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FACupComponent } from './fa-cup.component';

describe('FACupComponent', () => {
  let component: FACupComponent;
  let fixture: ComponentFixture<FACupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FACupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FACupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

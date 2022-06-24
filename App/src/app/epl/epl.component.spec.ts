import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPLComponent } from './epl.component';

describe('EPLComponent', () => {
  let component: EPLComponent;
  let fixture: ComponentFixture<EPLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

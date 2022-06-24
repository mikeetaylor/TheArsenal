import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Community_ShieldTableComponent } from './community-shield-table.component';

describe('Community_ShieldTableComponent', () => {
  let component: Community_ShieldTableComponent;
  let fixture: ComponentFixture<Community_ShieldTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Community_ShieldTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Community_ShieldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityShieldCardComponent } from './community-shield-card.component';

describe('CommunityShieldCardComponent', () => {
  let component: CommunityShieldCardComponent;
  let fixture: ComponentFixture<CommunityShieldCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityShieldCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityShieldCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

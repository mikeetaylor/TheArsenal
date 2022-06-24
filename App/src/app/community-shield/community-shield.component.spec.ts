import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityShieldComponent } from './community-shield.component';

describe('CommunityShieldComponent', () => {
  let component: CommunityShieldComponent;
  let fixture: ComponentFixture<CommunityShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityShieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

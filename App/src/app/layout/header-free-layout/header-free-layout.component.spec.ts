import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFreeLayoutComponent } from './header-free-layout.component';

describe('HeaderFreeLayoutComponent', () => {
  let component: HeaderFreeLayoutComponent;
  let fixture: ComponentFixture<HeaderFreeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFreeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFreeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

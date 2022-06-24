import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsMenuComponent } from './competitions-menu.component';

describe('CompetitionsMenuComponent', () => {
  let component: CompetitionsMenuComponent;
  let fixture: ComponentFixture<CompetitionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

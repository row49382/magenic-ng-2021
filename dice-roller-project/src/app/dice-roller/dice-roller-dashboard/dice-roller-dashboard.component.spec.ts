import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerDashboardComponent } from './dice-roller-dashboard.component';

describe('DiceRollerDashboardComponent', () => {
  let component: DiceRollerDashboardComponent;
  let fixture: ComponentFixture<DiceRollerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerHistoryComponent } from './dice-roller-history.component';

describe('DiceRollerHistoryComponent', () => {
  let component: DiceRollerHistoryComponent;
  let fixture: ComponentFixture<DiceRollerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollerHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

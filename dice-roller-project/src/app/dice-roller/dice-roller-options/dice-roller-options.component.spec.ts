import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerOptionsComponent } from './dice-roller-options.component';

describe('DiceRollerOptionsComponent', () => {
  let component: DiceRollerOptionsComponent;
  let fixture: ComponentFixture<DiceRollerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollerOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

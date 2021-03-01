import { TestBed } from '@angular/core/testing';

import { DiceRollerUserCounterService } from './dice-roller-user-counter.service';

describe('DiceRollerUserCounterService', () => {
  let service: DiceRollerUserCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceRollerUserCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

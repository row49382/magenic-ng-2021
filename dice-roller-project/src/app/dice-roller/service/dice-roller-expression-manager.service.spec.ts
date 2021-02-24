import { TestBed } from '@angular/core/testing';

import { DiceRollerExpressionManagerService } from './dice-roller-expression-manager.service';

describe('DiceRollerExpressionManagerService', () => {
  let service: DiceRollerExpressionManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceRollerExpressionManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

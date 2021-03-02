import { TestBed } from '@angular/core/testing';

import { SessionsManagerService } from './sessions-manager.service';

describe('SessionsManagerService', () => {
  let service: SessionsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

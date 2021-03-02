import { TestBed } from '@angular/core/testing';

import { SideNavContentService } from './side-nav-content.service';

describe('SideNavContentService', () => {
  let service: SideNavContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

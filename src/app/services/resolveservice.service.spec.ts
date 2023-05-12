import { TestBed } from '@angular/core/testing';

import { ResolveserviceService } from './resolveservice.service';

describe('ResolveserviceService', () => {
  let service: ResolveserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

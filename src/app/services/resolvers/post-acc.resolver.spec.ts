import { TestBed } from '@angular/core/testing';

import { PostAccResolver } from './post-acc.resolver';

describe('PostAccResolver', () => {
  let resolver: PostAccResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PostAccResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

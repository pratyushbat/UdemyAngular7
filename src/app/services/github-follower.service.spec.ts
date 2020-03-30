import { TestBed } from '@angular/core/testing';

import { GithubFollowerService } from './github-follower.service';

describe('GithubFollowerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubFollowerService = TestBed.get(GithubFollowerService);
    expect(service).toBeTruthy();
  });
});

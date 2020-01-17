import { TestBed } from '@angular/core/testing';

import { OprecApiService } from './oprec-api.service';

describe('OprecApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OprecApiService = TestBed.get(OprecApiService);
    expect(service).toBeTruthy();
  });
});

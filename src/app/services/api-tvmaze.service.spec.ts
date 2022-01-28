import { TestBed } from '@angular/core/testing';

import { ApiTvmazeService } from './api-tvmaze.service';

describe('ApiTvmazeService', () => {
  let service: ApiTvmazeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTvmazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

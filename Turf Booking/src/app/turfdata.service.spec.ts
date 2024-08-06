import { TestBed } from '@angular/core/testing';

import { TurfService } from './turfdata.service';

describe('TurfdataService', () => {
  let service: TurfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

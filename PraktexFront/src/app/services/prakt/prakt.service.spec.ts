import { TestBed } from '@angular/core/testing';

import { PraktService } from './prakt.service';

describe('PraktService', () => {
  let service: PraktService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraktService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

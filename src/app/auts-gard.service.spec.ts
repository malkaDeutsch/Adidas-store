import { TestBed } from '@angular/core/testing';

import { AutsGardService } from './auts-gard.service';

describe('AutsGardService', () => {
  let service: AutsGardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutsGardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

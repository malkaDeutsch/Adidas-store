import { TestBed } from '@angular/core/testing';

import { PayGuard } from './pay.guard';

describe('PayGuard', () => {
  let guard: PayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

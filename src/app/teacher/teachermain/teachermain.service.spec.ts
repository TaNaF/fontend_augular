import { TestBed } from '@angular/core/testing';

import { TeachermainService } from './teachermain.service';

describe('TeachermainService', () => {
  let service: TeachermainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachermainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OlddataService } from './olddata.service';

describe('OlddataService', () => {
  let service: OlddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

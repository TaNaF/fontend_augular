import { TestBed } from '@angular/core/testing';

import { AddNewsubjectService } from './add-newsubject.service';

describe('AddNewsubjectService', () => {
  let service: AddNewsubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewsubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

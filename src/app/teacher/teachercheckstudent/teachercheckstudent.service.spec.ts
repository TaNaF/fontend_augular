import { TestBed } from '@angular/core/testing';

import { TeachercheckstudentService } from './teachercheckstudent.service';

describe('TeachercheckstudentService', () => {
  let service: TeachercheckstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachercheckstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

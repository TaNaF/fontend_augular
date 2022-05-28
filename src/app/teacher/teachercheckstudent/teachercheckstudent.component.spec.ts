import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachercheckstudentComponent } from './teachercheckstudent.component';

describe('TeachercheckstudentComponent', () => {
  let component: TeachercheckstudentComponent;
  let fixture: ComponentFixture<TeachercheckstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachercheckstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachercheckstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

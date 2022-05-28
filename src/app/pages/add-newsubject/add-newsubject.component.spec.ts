import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsubjectComponent } from './add-newsubject.component';

describe('AddNewsubjectComponent', () => {
  let component: AddNewsubjectComponent;
  let fixture: ComponentFixture<AddNewsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

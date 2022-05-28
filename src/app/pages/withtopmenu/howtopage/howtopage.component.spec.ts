import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtopageComponent } from './howtopage.component';

describe('HowtopageComponent', () => {
  let component: HowtopageComponent;
  let fixture: ComponentFixture<HowtopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

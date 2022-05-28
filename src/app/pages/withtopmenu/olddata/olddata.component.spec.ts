import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlddataComponent } from './olddata.component';

describe('OlddataComponent', () => {
  let component: OlddataComponent;
  let fixture: ComponentFixture<OlddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

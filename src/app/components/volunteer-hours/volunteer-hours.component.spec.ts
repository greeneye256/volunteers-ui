import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerHoursComponent } from './volunteer-hours.component';

describe('VolunteerHoursComponent', () => {
  let component: VolunteerHoursComponent;
  let fixture: ComponentFixture<VolunteerHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

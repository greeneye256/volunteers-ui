import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevolunteerComponent } from './createvolunteer.component';

describe('CreatevolunteerComponent', () => {
  let component: CreatevolunteerComponent;
  let fixture: ComponentFixture<CreatevolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatevolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodhomeComponent } from './goodhome.component';

describe('GoodhomeComponent', () => {
  let component: GoodhomeComponent;
  let fixture: ComponentFixture<GoodhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

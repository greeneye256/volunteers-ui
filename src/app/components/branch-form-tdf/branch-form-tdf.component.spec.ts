import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchFormTdfComponent } from './branch-form-tdf.component';

describe('BranchFormTdfComponent', () => {
  let component: BranchFormTdfComponent;
  let fixture: ComponentFixture<BranchFormTdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchFormTdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchFormTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

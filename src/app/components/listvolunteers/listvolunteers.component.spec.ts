import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvolunteersComponent } from './listvolunteers.component';

describe('ListvolunteersComponent', () => {
  let component: ListvolunteersComponent;
  let fixture: ComponentFixture<ListvolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListvolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

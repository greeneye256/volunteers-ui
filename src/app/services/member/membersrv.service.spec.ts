import { TestBed } from '@angular/core/testing';

import { MembersrvService } from './membersrv.service';

describe('MembersrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembersrvService = TestBed.get(MembersrvService);
    expect(service).toBeTruthy();
  });
});

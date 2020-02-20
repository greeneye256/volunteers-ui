import { TestBed } from '@angular/core/testing';

import { IdDataTransferService } from './id-data-transfer.service';

describe('IdDataTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdDataTransferService = TestBed.get(IdDataTransferService);
    expect(service).toBeTruthy();
  });
});

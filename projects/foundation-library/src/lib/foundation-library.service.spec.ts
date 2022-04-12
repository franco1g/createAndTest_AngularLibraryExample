import { TestBed } from '@angular/core/testing';

import { FoundationLibraryService } from './foundation-library.service';

describe('FoundationLibraryService', () => {
  let service: FoundationLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoundationLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

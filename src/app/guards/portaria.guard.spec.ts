import { TestBed, inject } from '@angular/core/testing';

import { PortariaGuard } from './portaria.guard';

describe('PortariaGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortariaGuard]
    });
  });

  it('should be created', inject([PortariaGuard], (service: PortariaGuard) => {
    expect(service).toBeTruthy();
  }));
});

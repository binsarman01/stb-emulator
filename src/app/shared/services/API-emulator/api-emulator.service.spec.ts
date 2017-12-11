import { TestBed, inject } from '@angular/core/testing';

import { ApiEmulatorService } from './api-emulator.service';

describe('ApiEmulatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiEmulatorService]
    });
  });

  it('should be created', inject([ApiEmulatorService], (service: ApiEmulatorService) => {
    expect(service).toBeTruthy();
  }));
});

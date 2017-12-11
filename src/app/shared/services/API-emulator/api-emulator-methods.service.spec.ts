import { TestBed, inject } from '@angular/core/testing';

import { ApiEmulatorMethodsService } from './api-emulator-methods.service';

describe('ApiEmulatorMethodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiEmulatorMethodsService]
    });
  });

  it('should be created', inject([ApiEmulatorMethodsService], (service: ApiEmulatorMethodsService) => {
    expect(service).toBeTruthy();
  }));
});

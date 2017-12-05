import { TestBed, inject } from '@angular/core/testing';

import { FacebookConnectService } from './facebook-connect.service';

describe('FacebookConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookConnectService]
    });
  });

  it('should be created', inject([FacebookConnectService], (service: FacebookConnectService) => {
    expect(service).toBeTruthy();
  }));
});

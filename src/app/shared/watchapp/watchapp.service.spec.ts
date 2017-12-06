import { TestBed, inject } from '@angular/core/testing';

import { WatchappService } from './watchapp.service';

describe('WatchappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchappService]
    });
  });

  it('should be created', inject([WatchappService], (service: WatchappService) => {
    expect(service).toBeTruthy();
  }));
});

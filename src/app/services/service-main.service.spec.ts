import { TestBed, inject } from '@angular/core/testing';

import { ServiceMainService } from './service-main.service';

describe('ServiceMainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMainService]
    });
  });

  it('should be created', inject([ServiceMainService], (service: ServiceMainService) => {
    expect(service).toBeTruthy();
  }));
});

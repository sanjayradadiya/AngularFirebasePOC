import { TestBed, inject } from '@angular/core/testing';

import { FirebaseProviderService } from './firebase-provider.service';

describe('FirebaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseProviderService]
    });
  });

  it('should be created', inject([FirebaseProviderService], (service: FirebaseProviderService) => {
    expect(service).toBeTruthy();
  }));
});

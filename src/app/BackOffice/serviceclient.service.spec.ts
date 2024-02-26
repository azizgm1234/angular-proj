import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { ServiceclientService } from './serviceclient.service';

describe('ServiceclientService', () => {
  let service: ServiceclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ParticaptionService } from './participation.service';

describe('ParticaptionService', () => {
  let service: ParticaptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticaptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';
import { UtilityMockService } from 'src/app/core/test-helpers/stub.service';

describe('UtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [UtilityService]}));

  it('should be created', () => {
    const service: UtilityService = TestBed.get(UtilityService);
    expect(service).toBeTruthy();
  });

  it('uuid:should generate uuid', () => {
    const service: UtilityService = TestBed.get(UtilityService);
    expect(service.uuid().length).toBe(36);
  });
});

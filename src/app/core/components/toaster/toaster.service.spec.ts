import { TestBed } from '@angular/core/testing';

import { JarvisToasterService } from './toaster.service';
import { JarvisToasterMockService } from '../../test-helpers/stub.service';

describe('JarvisToasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [{provide: JarvisToasterService, useValue: JarvisToasterMockService}]}));

  it('should be created', () => {
    const service: JarvisToasterService = TestBed.get(JarvisToasterService);
    expect(service).toBeTruthy();
  });
});

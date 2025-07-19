import { TestBed } from '@angular/core/testing';

import { InterceptorMiddleWareService } from './interceptor-middle-ware.service';

describe('InterceptorMiddleWareService', () => {
  let service: InterceptorMiddleWareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorMiddleWareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

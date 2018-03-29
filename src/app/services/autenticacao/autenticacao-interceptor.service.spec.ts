import { TestBed, inject } from '@angular/core/testing';

import { AutenticacaoInterceptorService } from './autenticacao-interceptor.service';

describe('AutenticacaoInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoInterceptorService]
    });
  });

  it('should be created', inject([AutenticacaoInterceptorService], (service: AutenticacaoInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});

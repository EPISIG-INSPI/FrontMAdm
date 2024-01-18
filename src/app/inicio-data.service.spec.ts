import { TestBed } from '@angular/core/testing';

import { InicioDataService } from './inicio-data.service';

describe('InicioDataService', () => {
  let service: InicioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

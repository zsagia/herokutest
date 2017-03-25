import { TestBed, inject } from '@angular/core/testing';

import { BuildingServiceImpl } from './building.service.impl';

describe('BuildingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildingServiceImpl]
    });
  });

  it('should ...', inject([BuildingServiceImpl], (service: BuildingServiceImpl) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { TemperatureMonitoringService } from './temperature-monitoring.service';

describe('TemperatureMonitoringService', () => {
  let service: TemperatureMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

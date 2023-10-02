import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureMonitoringService {

  checkTemperature(temperature: number): boolean {
    return temperature > 10;
  }
  
}

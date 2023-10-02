import { Component } from '@angular/core';
import { TemperatureMonitoringService } from './temperature-monitoring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperature: number = 10;

  constructor(private temperatureMonitoringService: TemperatureMonitoringService) {}

  isNotWell(): boolean {
    return this.temperatureMonitoringService.checkTemperature(this.temperature);
  }
}

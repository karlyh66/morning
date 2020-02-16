import { Component } from '@angular/core';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';


@Component({
  template: '<weather-widget [settings]="settings"></weather-widget>'
})
export class WeatherComponent {
    settings: WeatherSettings = {
      location: {
        cityName: 'Szczecin'
      },
      backgroundColor: '#347c57',
      color: '#ffffff',
      width: '300px',
      height: 'auto',
      showWind: false,
      scale: TemperatureScale.FAHRENHEIT,
      forecastMode: ForecastMode.DETAILED,
      showDetails: false,
      showForecast: true,
      layout: WeatherLayout.WIDE,
      language: 'en'
    };
}
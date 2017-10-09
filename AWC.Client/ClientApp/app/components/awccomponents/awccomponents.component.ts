import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'clothing',
    templateUrl: './awccomponents.component.html'
})
export class AWCComponentsComponent {
    public forecasts: WeatherForecast[];

    constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        http.get(originUrl + '/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

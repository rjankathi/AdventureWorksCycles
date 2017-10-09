import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'clothing',
    templateUrl: './clothing.component.html'
})
export class ClothingComponent {
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

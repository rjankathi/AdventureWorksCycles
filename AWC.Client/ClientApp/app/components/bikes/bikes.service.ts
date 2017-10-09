import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BikesService {
    private _baseUrl = "http://localhost:12345/api/bikes/";
    private _all = `${this._baseUrl}all`; //"http://localhost:12345/api/bikes/all"; 
   // private _bike = `${this._baseUrl}/id/details`;
    //tag `string text ${expression} string text`

    constructor(private _http: Http) { }

    public GetAllBikes$(): Observable<Array<any>> {
        return this._http.get(this._all)
            .map((response: Response) => response.json())
            .catch(this.HandleError);
    }

    public GetBike$(id): Observable<Array<any>> {
        return this._http.get(this._baseUrl + id+"/details")
            .map((response: Response) => response.json())
            .catch(this.HandleError);
    }

    private HandleError(error: Response) {
        console.error(error);
        return Observable.throw(error || { _body: "Unknown Error" });
    }
}

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BikesService } from '../bikes/bikes.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare let $: any;
//import * as $ from 'jquery';
@Component({
    selector: 'touring-bikes',
    templateUrl: './touring-bikes.component.html',
    styleUrls: ['./touring-bikes.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class TouringBikesComponent {
    public bikeDetails: Array<any> = [];
    constructor(private _r: Router, private _ar: ActivatedRoute, private _bikesService: BikesService, private _san: DomSanitizer) { }

    public ngOnInit() {
        let t = this;
        let bikeId: string;
        bikeId = t._ar.snapshot.params['productId'];
        t._bikesService.GetBike$(bikeId)
            .subscribe(bikeDetails => {
                t.bikeDetails = bikeDetails;
                //console.log(t.bikeDetails);
            });
    }


}

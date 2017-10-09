import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BikesService } from '../bikes/bikes.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare let $: any;
//import * as $ from 'jquery';
@Component({
    selector: 'bikes-list',
    templateUrl: './bikes.component.html',
    styleUrls: ['./bikes.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BikesComponent {
    title = "SoRa";
    debugger;
    isDarkTheme: boolean = false;
    errorMessage: string;
    public bikes: Array<any> =[];
    constructor(private _bikesService: BikesService, private _san: DomSanitizer) { }

    public ngOnInit(){
        let t = this;

        t._bikesService.GetAllBikes$()
            .subscribe(bikes => {
               
                t.bikes = bikes;
                console.log(t.bikes);
            });
    }

    filterBikesOfType(productSubCatId) {
       
        return this.bikes.filter(x => x.productSubCategoryId == productSubCatId);
    }

    GetBikeImage(productId: number) {
        //debugger;
        let bikeImage = this.bikes.find(f => f.productId === productId).image;
        let img = this._san.bypassSecurityTrustUrl('data:image/png;base64,'+bikeImage);
        return img;
    }
}

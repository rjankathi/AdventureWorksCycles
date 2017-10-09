import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BikesService } from '../bikes/bikes.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
//import { SharedModule } from '../../app.module.shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let $: any;
//import * as $ from 'jquery';
@Component({
    selector: 'mountain-bikes',
    templateUrl: './mountain-bikes.component.html',
    styleUrls: ['./mountain-bikes.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MountainBikesComponent {
    public bikeDetails: Array<any> = [];
    public isLinear: boolean = false;
    public firstFormGroup: FormGroup;
    public secondFormGroup: FormGroup;

    constructor(private _r:Router,private _ar:ActivatedRoute,private _fb:FormBuilder,private _bikesService: BikesService, private _san: DomSanitizer) { }

    public ngOnInit(){
        let t = this;
        let bikeId: string;
        //First Form Group
        t.firstFormGroup = t._fb.group({
            firstCtrl: ['', Validators.required]
        });

        //Second Form group
        t.secondFormGroup = t._fb.group({
            secondCtrl: ['', Validators.required]
        });

        bikeId = t._ar.snapshot.params['productId'];
        t._bikesService.GetBike$(bikeId)
            .subscribe(bikeDetails => {
                t.bikeDetails = bikeDetails;
                //console.log(t.bikeDetails);
            });
    }
}

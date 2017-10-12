import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    //public bikeDetails: Array<any> = [];
    //constructor(private _r: Router, private _ar: ActivatedRoute, private _bikesService: BikesService, private _san: DomSanitizer) { }

    //public ngOnInit() {
    //    let t = this;
    //    let bikeId: string;
    //    bikeId = t._ar.snapshot.params['productId'];
    //    t._bikesService.GetBike$(bikeId)
    //        .subscribe(bikeDetails => {
    //            t.bikeDetails = bikeDetails;
    //            //console.log(t.bikeDetails);
    //        });
    //}
    formGroup: FormGroup;
    isNonLinear = false;
    isNonEditable = false;

    nameFormGroup: FormGroup;
    emailFormGroup: FormGroup;

    steps = [
        { label: 'Confirm your name', content: 'Last name, First name.' },
        { label: 'Confirm your contact information', content: '123-456-7890' },
        { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
        { label: 'You are now done', content: 'Finished!' }
    ];

    /** Returns a FormArray with the name 'formArray'. */
    get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    firstNameFormCtrl: ['', Validators.required],
                    lastNameFormCtrl: ['', Validators.required],
                }),
                this._formBuilder.group({
                    emailFormCtrl: ['', Validators.email]
                }),
            ])
        });

        this.nameFormGroup = this._formBuilder.group({
            firstNameCtrl: ['', Validators.required],
            lastNameCtrl: ['', Validators.required],
        });

        this.emailFormGroup = this._formBuilder.group({
            emailCtrl: ['', Validators.email]
        });
    }

}

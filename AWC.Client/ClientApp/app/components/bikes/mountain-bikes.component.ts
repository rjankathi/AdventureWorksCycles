import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BikesService } from '../bikes/bikes.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
//import { SharedModule } from '../../app.module.shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
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
  
    formGroup: FormGroup;
    isNonLinear = false;
    isNonEditable = false;
    bikeImage = [];
    bikeFormGroup: FormGroup;
    cartFormGroup: FormGroup;
    shippingFormGroup: FormGroup;
    paymentFormGroup: FormGroup;

    public addToCartStepValue: any;
    displayedColumns = ['item', 'price', 'quantity', 'remove'];
    //paymentFormGroup: FormGroup;
    quantity = [
        { value: 1 },
        { value: 2 },
        { value: 3 }
    ];
    constructor(private _r: Router, private _ar: ActivatedRoute, private _fb: FormBuilder, private _bikesService: BikesService, private _san: DomSanitizer) {
        this.createForm();
    }

    public ngOnInit(){
        let t = this;
        let bikeId: string;
       
        bikeId = t._ar.snapshot.params['productId'];


        t._bikesService.GetBike$(bikeId).subscribe((bd: any) => {
            t.bikeDetails = bd;
            t.bikeImage = bd.image;
                console.log(bd);
                var bikeData = {
                    //productId: bd.productId,
                    //productModelId: bd.productModelId,
                    //productSubCategoryId: bd.productSubCategoryId,
                    bikeNameCtrl: bd.name,
                    //imageCtrl: [],
                    bikeListPriceCtrl: bd.listPrice,
                    bikeColorCtrl: bd.color,
                    bikeSizeCtrl: bd.size,
                    bikeSizeUnitMeasureCodeCtrl: bd.sizeUnitMeasureCode,
                    bikeWeightCtrl: bd.weight,
                    bikeWeightUnitMeasureCodeCtrl: bd.weightUnitMeasureCode,

                    //bikeNameCtrl: 'Mountain Silver',
                    //bikeColorCtrl: 'Silver',
                    //bikeSizeCtrl: '50',
                    //bikeSizeUnitMeasureCodeCtrl: 'CM',
                    //bikeWeightCtrl: '110',
                    //bikeWeightUnitMeasureCodeCtrl: 'LB',
                    //bikeListPriceCtrl: '$3,999'
                };
                t.bikeFormGroup.setValue(bikeData, { onlySelf: false, emitEvent: false });
            });

       
    }

    public createForm() {
        this.bikeFormGroup = this._fb.group({
            //productId: 0,
            //productModelId: 0,
            //productSubCategoryId: 0,
            //imageCtrl:'',
            bikeNameCtrl: {value:'',disabled:true},
            bikeColorCtrl: { value: '', disabled: true },
            bikeSizeCtrl: { value: '', disabled: true },
            bikeSizeUnitMeasureCodeCtrl: { value: '', disabled: true },
            bikeWeightCtrl: { value: '', disabled: true },
            bikeWeightUnitMeasureCodeCtrl: { value: '', disabled: true },
            bikeListPriceCtrl: { value: '', disabled: true }
        });


        //this.cartFormGroup = this._fb.group({
        //    //emailCtrl: ['', Validators.email]
        //    emailCtrl: ''
        //});

        this.shippingFormGroup = this._fb.group({
            //emailCtrl: ['', Validators.email]
            emailCtrl: ''
        });

        this.paymentFormGroup = this._fb.group({
            //emailCtrl: ['', Validators.email]
            emailCtrl: ''

        });

    }

    public addToCart(e:Event,stepper: MatStepper) {
        console.log(stepper);
        
        alert("matStepperNext overrided using addToCart() method");
        this.addToCartStepValue = stepper.selected.stepControl.value;
        stepper.next();
       // this.addToCartStepValue = stepper.selected.stepControl.value;
        console.log(this.addToCartStepValue);
    }


}

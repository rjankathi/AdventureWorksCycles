import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { SharedModule } from '../../app.module.shared';
import { BikesComponent } from './bikes.component';
import { MountainBikesComponent } from './mountain-bikes.component';
import { RoadBikesComponent } from './road-bikes.component';
import { TouringBikesComponent } from './touring-bikes.component';

import { BikesService } from './bikes.service';
import { BikesRoutingModule } from './bikes-routing.module';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import {
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
@NgModule({
    declarations: [
        BikesComponent,
        MountainBikesComponent,
        RoadBikesComponent,
        TouringBikesComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        BikesRoutingModule,
        CdkTableModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdCoreModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdPaginatorModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdSortModule,
        MdTableModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
    ],
    providers: [BikesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BikesModule {
   
}
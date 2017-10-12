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
    MatStepperModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
//import { CdkTableModule } from '@angular/cdk';
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
        MatStepperModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
    ],
    providers: [BikesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BikesModule {
   
}
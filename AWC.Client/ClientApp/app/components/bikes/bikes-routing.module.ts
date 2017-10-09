import { NgModule} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { BikesComponent } from './bikes.component';
import { TouringBikesComponent } from './touring-bikes.component';
import { MountainBikesComponent } from './mountain-bikes.component';
import { RoadBikesComponent } from './road-bikes.component';

export const ROUTES: Routes = [
    { path: '', redirectTo:'bikes',pathMatch:'full' },
    {
        path: 'bikes', component: BikesComponent,
        //children: [
        //    { path: 'mountain/:productId', component: MountainBikesComponent },
        //    { path: 'touring/:productId', component: TouringBikesComponent },
        //    { path: 'road/:productId', component: RoadBikesComponent },
        //    { path: '**', redirectTo:'bikes' }
        //]
    },
    { path: 'bikes/mountain/:productId', component: MountainBikesComponent },
    { path: 'bikes/touring/:productId', component: TouringBikesComponent },
    { path: 'bikes/road/:productId', component: RoadBikesComponent },
    { path: '**', redirectTo: 'bikes' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
})
export class BikesRoutingModule {
}
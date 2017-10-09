import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesModule } from './components/bikes/bikes.module';
import { SharedModule } from './app.module.shared';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    { path: 'dashboard', component: DashboardComponent },
    { path: '', loadChildren:()=>BikesModule },
];
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
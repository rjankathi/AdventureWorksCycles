import { Component, ViewChild } from '@angular/core';

declare let $: any;
//import * as $ from 'jquery';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "SoRa";
    isDarkTheme: boolean = false;
   


    //@ViewChild('sidenav') sideNav: M
    //ngOnInit() {
    //    $(".mat-sidenav-content").css("margin-left","");
    //        //removeAttr("style");

    //}
}

import { Component } from '@angular/core';
import { MdIconModule } from '@angular/material';
import { MdIconRegistry } from '@angular/material';
@Component({
    selector: 'accessories',
    templateUrl: './accessories.component.html'
})
export class AccessoriesComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}

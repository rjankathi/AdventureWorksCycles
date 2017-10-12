import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { MatIconRegistry } from '@angular/material';
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

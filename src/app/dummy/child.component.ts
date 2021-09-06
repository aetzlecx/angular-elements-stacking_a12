import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent {

    @Input()
    set items(value: string) {
        if (value) {
            this.itemsArray = value.split(',');
        } else {
            this.itemsArray = [];
        }
    }

    get items(): string {
        return this.itemsArray?.join(',') ?? '';
    }

    itemsArray: string[];
}

import {Component, Input, OnInit} from '@angular/core';
import {DataReceiver} from "../datareceiver";

@Component({
    selector: 'app-datashow',
    templateUrl: './datashow.component.html',
    styleUrls: ['./datashow.component.css']
})
export class DatashowComponent extends DataReceiver implements OnInit {
    @Input() data: any = {}

    properties: object[] = []

    constructor() {
        super()
    }

    ngOnInit() {
        if (this.data) {
            for (var key in this.data) {
                this.properties.push({name: key, value: this.data[key]})
            }
        }
    }

}

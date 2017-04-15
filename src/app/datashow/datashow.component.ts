import {Component, Input, OnInit} from '@angular/core';
import {DataReceiver} from "../datareceiver";

@Component({
    selector: 'app-datashow',
    templateUrl: './datashow.component.html',
    styleUrls: ['./datashow.component.css']
})
export class DatashowComponent extends DataReceiver implements OnInit {
    properties: object[] = []

    constructor() {
        super()
    }

    setData(data) {
        if (data) {
            for (var key in data) {
                this.properties.push({name: key, value: data[key]})
            }
        }
        return this.properties
    }

    ngOnInit() {

    }

}

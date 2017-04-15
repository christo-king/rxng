import {Component, Input, OnInit} from '@angular/core';
import {DataReceiver} from "../datareceiver";

@Component({
    selector: 'app-datagroup',
    templateUrl: './datagroup.component.html',
    styleUrls: ['./datagroup.component.css']
})
export class DatagroupComponent extends DataReceiver implements OnInit {

    @Input() datagroup: any = []

    constructor() {
        super()
    }

    ngOnInit() {
        this.datagroup = this.data
    }

}

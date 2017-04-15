import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataReceiver} from "../datareceiver";
import {Http} from "@angular/http";
import {DataService} from "../app.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input() receiver: DataReceiver
    navopened: boolean = false

    constructor(private _dataService: DataService) {
    }

    getData() {
        this._dataService.getData(this.receiver)
    }

    toggle() {
        this.navopened = !this.navopened;
    }

    ngOnInit() {
    }

}

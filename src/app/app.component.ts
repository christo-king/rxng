import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {DataReceiver} from "./datareceiver";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends DataReceiver {
    title = 'Initial Page';
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppMaterialModule} from './app.material'

import 'hammerjs';
import { NavbarComponent } from './navbar/navbar.component'
import {DataService} from "./app.service";
import { DatashowComponent } from './datashow/datashow.component';
import {MdIconRegistry} from "@angular/material";
import { DatagroupComponent } from './datagroup/datagroup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatashowComponent,
    DatagroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppMaterialModule
  ],
  providers: [MdIconRegistry, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('material', 'material-icons');
  }
}

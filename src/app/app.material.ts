import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MdToolbarModule, MdSidenavModule, MdListModule, MdIconModule, MdButtonModule} from '@angular/material'
import {NgModule} from "@angular/core";

@NgModule ({
    imports: [BrowserAnimationsModule, MdSidenavModule,MdToolbarModule, MdListModule, MdIconModule, MdButtonModule],
    exports: [BrowserAnimationsModule, MdSidenavModule,MdToolbarModule, MdListModule, MdIconModule, MdButtonModule]
})

export class AppMaterialModule{

}
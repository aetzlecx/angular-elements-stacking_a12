import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentModule } from './dummy/parent.module';
import { ChildModule } from './dummy/child.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ParentModule,
        ChildModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

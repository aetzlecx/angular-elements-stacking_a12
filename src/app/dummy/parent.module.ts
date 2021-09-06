import { ParentComponent } from './parent.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ParentComponent
    ],
    exports: [
        ParentComponent
    ],
    imports: [
        BrowserModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParentModule {

}

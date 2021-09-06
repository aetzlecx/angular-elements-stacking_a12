import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ParentModule } from './parent.module';
import { ChildModule } from './child.module';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@NgModule({
    imports: [
        ParentModule,
        ChildModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class DummyBootstrapModule implements DoBootstrap {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap(): void {
        this.register(ParentComponent, 'wc-parent');
        this.register(ChildComponent, 'wc-child');
    }

    register(component: Type<any>, name: string): void {
        const element = createCustomElement(component, {injector: this.injector});
        customElements.define(name, element);
    }
}

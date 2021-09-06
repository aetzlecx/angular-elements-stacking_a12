import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '../../environments/environment';
import { DummyBootstrapModule } from './dummy-bootstrap.module';

if (environment.production) {
    enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(DummyBootstrapModule);
bootstrap().catch(err => console.error(err));

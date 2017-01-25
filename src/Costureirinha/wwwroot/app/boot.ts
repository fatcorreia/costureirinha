import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration,
    disableDeprecatedForms(),
    provideForms(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]).catch(err => console.error(err));

import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ArranjoComponent } from './arranjo/arranjo.component';
import { ArranjoDetailComponent } from './arranjo/arranjo-detail.component';
import { EngomadoriaComponent } from './engomadoria/engomadoria.component';
import { EngomadoriaDetailComponent } from './engomadoria/engomadoria-detail.component';
import { LavandariaComponent } from './lavandaria/lavandaria.component';
import { LavandariaDetailComponent } from './lavandaria/lavandaria-detail.component';
import { OpiniaoComponent } from './opiniao/opiniao.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: 'arranjo', component: ArranjoComponent },
    { path: 'arranjo/:id', component: ArranjoDetailComponent },
    { path: 'engomadoria', component: EngomadoriaComponent },
    { path: 'engomadoria/:id', component: EngomadoriaDetailComponent },
    { path: 'lavandaria', component: LavandariaComponent },
    { path: 'lavandaria/:id', component: LavandariaDetailComponent },
    { path: 'opiniao', component: OpiniaoComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
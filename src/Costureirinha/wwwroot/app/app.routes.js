"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contactos_component_1 = require("./contactos/contactos.component");
var arranjo_component_1 = require("./arranjo/arranjo.component");
var arranjo_detail_component_1 = require("./arranjo/arranjo-detail.component");
var engomadoria_component_1 = require("./engomadoria/engomadoria.component");
var engomadoria_detail_component_1 = require("./engomadoria/engomadoria-detail.component");
var lavandaria_component_1 = require("./lavandaria/lavandaria.component");
var lavandaria_detail_component_1 = require("./lavandaria/lavandaria-detail.component");
var opiniao_component_1 = require("./opiniao/opiniao.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contactos', component: contactos_component_1.ContactosComponent },
    { path: 'arranjo', component: arranjo_component_1.ArranjoComponent },
    { path: 'arranjo/:id', component: arranjo_detail_component_1.ArranjoDetailComponent },
    { path: 'engomadoria', component: engomadoria_component_1.EngomadoriaComponent },
    { path: 'engomadoria/:id', component: engomadoria_detail_component_1.EngomadoriaDetailComponent },
    { path: 'lavandaria', component: lavandaria_component_1.LavandariaComponent },
    { path: 'lavandaria/:id', component: lavandaria_detail_component_1.LavandariaDetailComponent },
    { path: 'opiniao', component: opiniao_component_1.OpiniaoComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map
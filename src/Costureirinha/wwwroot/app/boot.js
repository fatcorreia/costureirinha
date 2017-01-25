"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_constants_1 = require("./app.constants");
var app_routes_1 = require("./app.routes");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    app_constants_1.Configuration,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=boot.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var LavandariaService_1 = require("../services/LavandariaService");
var nome_pipe_1 = require("../pipes/nome.pipe");
var LavandariaComponent = (function () {
    function LavandariaComponent(router, _lavandariaService) {
        this.router = router;
        this._lavandariaService = _lavandariaService;
    }
    LavandariaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._lavandariaService
            .GetAll()
            .subscribe(function (data) { return _this.lavandaria = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    };
    return LavandariaComponent;
}());
LavandariaComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/lavandaria/lavandaria.component.html',
        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
        providers: [LavandariaService_1.LavandariaService],
        pipes: [nome_pipe_1.NomePipe]
    }),
    __metadata("design:paramtypes", [router_1.Router, LavandariaService_1.LavandariaService])
], LavandariaComponent);
exports.LavandariaComponent = LavandariaComponent;
//# sourceMappingURL=lavandaria.component.js.map
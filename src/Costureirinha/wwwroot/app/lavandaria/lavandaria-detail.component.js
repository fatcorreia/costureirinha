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
var LavandariaDetailComponent = (function () {
    function LavandariaDetailComponent(route, router, _lavandariaService) {
        this.route = route;
        this.router = router;
        this._lavandariaService = _lavandariaService;
    }
    LavandariaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this._lavandariaService
                .GetSingle(id)
                .subscribe(function (data) { return _this.servico = data; }, function (error) { return console.log(error); }, function () { return console.log('Get complete'); });
        });
    };
    LavandariaDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return LavandariaDetailComponent;
}());
LavandariaDetailComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/lavandaria/lavandaria-detail.component.html',
        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
        providers: [LavandariaService_1.LavandariaService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, LavandariaService_1.LavandariaService])
], LavandariaDetailComponent);
exports.LavandariaDetailComponent = LavandariaDetailComponent;
//# sourceMappingURL=lavandaria-detail.component.js.map
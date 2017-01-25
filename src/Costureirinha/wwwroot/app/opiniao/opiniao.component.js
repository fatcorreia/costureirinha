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
var OpiniaoService_1 = require("../services/OpiniaoService");
var OpiniaoComponent = (function () {
    //problema quando a lista inicial é vazia
    function OpiniaoComponent(_opiniaoService) {
        var _this = this;
        this._opiniaoService = _opiniaoService;
        this.opiniao = new Opiniao(0, "", 0, "");
        this._opiniaoService
            .GetAll()
            .subscribe(function (data) { return _this.opinioes = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    }
    OpiniaoComponent.prototype.onStarClick = function (id) {
        this.opiniao.estrelas = id;
    };
    OpiniaoComponent.prototype.onSubmit = function (data) {
        this.opinioes.push(new Opiniao(this.opinioes.length + 1, this.opiniao.autor, this.opiniao.estrelas, this.opiniao.texto));
        this._opiniaoService
            .AddAll(this.opinioes)
            .subscribe(function (data) { return true; }, function (error) { return console.log(error); }, function () { return console.log('Get all complete'); });
    };
    return OpiniaoComponent;
}());
OpiniaoComponent = __decorate([
    core_1.Component({
        selector: 'about',
        templateUrl: 'app/opiniao/opiniao.component.html',
        directives: [common_1.CORE_DIRECTIVES],
        providers: [OpiniaoService_1.OpiniaoService],
    }),
    __metadata("design:paramtypes", [OpiniaoService_1.OpiniaoService])
], OpiniaoComponent);
exports.OpiniaoComponent = OpiniaoComponent;
var Opiniao = (function () {
    function Opiniao(id, autor, estrelas, texto) {
        this.id = id;
        this.autor = autor;
        this.estrelas = estrelas;
        this.texto = texto;
    }
    return Opiniao;
}());
//# sourceMappingURL=opiniao.component.js.map
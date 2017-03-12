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
var core_1 = require('@angular/core');
var curso_service_1 = require('../core/curso.service');
var http_1 = require('@angular/http');
var ListarCursoComponent = (function () {
    function ListarCursoComponent(service) {
        this.cursos = [];
        this.cursosService = service;
        this.buildList();
    }
    ListarCursoComponent.prototype.buildList = function () {
        var _this = this;
        this.cursosService.listarCurso()
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.cursos = data; }, function (err) { return console.log(err); });
    };
    ListarCursoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '<listar-curso></listar-curso>',
            template: "<ul class=\"items badge\">\n                    <li *ngFor=\"#curso of cursos\">\n                        {{ curso.titulo }}\n                        <small>{{ curso.descricao }}</small>\n                    </li>\n                </ul>",
            providers: [curso_service_1.CursoService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [curso_service_1.CursoService])
    ], ListarCursoComponent);
    return ListarCursoComponent;
}());
exports.ListarCursoComponent = ListarCursoComponent;
//# sourceMappingURL=listar.curso.component.js.map
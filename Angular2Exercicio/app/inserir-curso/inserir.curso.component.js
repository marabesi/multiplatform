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
var http_1 = require('@angular/http');
var curso_service_1 = require('../core/curso.service');
var listar_curso_component_1 = require('../listar-curso/listar.curso.component');
var InserirCursoComponent = (function () {
    function InserirCursoComponent(inserirCurso, listarCurso) {
        this.inserirCurso = inserirCurso;
        this.listarCurso = listarCurso;
    }
    InserirCursoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.inserirCurso.inserirCurso(this.titulo, this.descricao)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.listarCurso.cursos.push({ "titulo": _this.titulo, "descricao": _this.descricao });
            _this.titulo = null;
            _this.descricao = null;
            alert('Curso Adicionado!');
            window.location.reload();
        }, function (err) { return console.log(err); });
    };
    InserirCursoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '<inserir-curso></inserir-curso>',
            templateUrl: './inserir.curso.html',
            providers: [curso_service_1.CursoService, http_1.HTTP_PROVIDERS, listar_curso_component_1.ListarCursoComponent]
        }), 
        __metadata('design:paramtypes', [curso_service_1.CursoService, listar_curso_component_1.ListarCursoComponent])
    ], InserirCursoComponent);
    return InserirCursoComponent;
}());
exports.InserirCursoComponent = InserirCursoComponent;
//# sourceMappingURL=inserir.curso.component.js.map
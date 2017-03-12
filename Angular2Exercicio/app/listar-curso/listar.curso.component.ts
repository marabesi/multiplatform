import { Component } from '@angular/core';
import { CursoService } from '../core/curso.service';
import { HTTP_PROVIDERS, Response } from '@angular/http';
import { Curso } from '../models/curso.model';

@Component({
    moduleId: module.id,
    selector: '<listar-curso></listar-curso>',
    template: `<ul class="items badge">
                    <li *ngFor="#curso of cursos">
                        {{ curso.titulo }}
                        <small>{{ curso.descricao }}</small>
                    </li>
                </ul>`,
    providers: [ CursoService, HTTP_PROVIDERS ]
})
export class ListarCursoComponent {
    cursos: Array<Curso> = [];
    cursosService: CursoService;

    constructor(service: CursoService) {
        this.cursosService = service;

        this.buildList();
    }

    buildList() {
        this.cursosService.listarCurso()
            .map((res: Response) => <Curso[]>res.json())
            .subscribe(
                data => this.cursos = data,
                err => console.log(err)
            );
    }
}
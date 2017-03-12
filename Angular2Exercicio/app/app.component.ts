import { Component } from '@angular/core';
import { InserirCursoComponent } from './inserir-curso/inserir.curso.component';
import { ListarCursoComponent } from './listar-curso/listar.curso.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Cursos</h1>

        <inserir-curso></inserir-curso>
        <listar-curso></listar-curso>
    `,
    directives: [ InserirCursoComponent, ListarCursoComponent ]
})

export class AppComponent { }

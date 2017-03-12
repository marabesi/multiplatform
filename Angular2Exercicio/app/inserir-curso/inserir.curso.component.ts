import { Component } from '@angular/core';
import { HTTP_PROVIDERS, Response } from '@angular/http';
import { CursoService } from '../core/curso.service';
import { ListarCursoComponent } from '../listar-curso/listar.curso.component';

@Component({
    moduleId: module.id,
    selector: '<inserir-curso></inserir-curso>',
    templateUrl: './inserir.curso.html',
    providers: [ CursoService, HTTP_PROVIDERS, ListarCursoComponent ]
})
export class InserirCursoComponent {

    inserirCurso: CursoService;
    titulo: string;
    descricao: string;
    listarCurso: ListarCursoComponent;

    constructor(inserirCurso: CursoService, listarCurso: ListarCursoComponent) {
        this.inserirCurso = inserirCurso;
        this.listarCurso = listarCurso;
    }

    onSubmit() {
        this.inserirCurso.inserirCurso(this.titulo, this.descricao)
            .map((res: Response) => res.json())
            .subscribe(
                data => {
                    this.listarCurso.cursos.push(
                        {"titulo": this.titulo, "descricao": this.descricao}
                    );

                    this.titulo = null;
                    this.descricao = null;

                    alert('Curso Adicionado!');
                    window.location.reload();
                },
                err => console.log(err)
            );
    }
}

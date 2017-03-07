import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos.components.html',
    providers: [ CursosService ],
})
export class CursosComponent {
    descricao = 'MBA 11MOB';
    disciplinas: Array<String>;

    constructor(cursosService: CursosService) {
        this.disciplinas = cursosService.getDisciplinas();
    }
}
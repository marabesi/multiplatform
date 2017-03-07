import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    getDisciplinas() {
        return [
            'Web',
            'PHP',
        ]
    }
}
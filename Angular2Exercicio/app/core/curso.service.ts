import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CursoService {
    
    http: Http;
    result: string;
    static URL: string = 'https://fiap:fiap@baas.kinvey.com/appdata/kid_BJAVj9bse/cursos';

    constructor(http: Http) {
        this.http = http;
    }

    private buildHeader() : Headers {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa('fiap:fiap'));

        return headers;
    }

    inserirCurso(titulo: string, descricao: string) {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa('fiap:fiap'));

        return this.http.post(CursoService.URL, {
            titulo: titulo,
            descricao: descricao
        }, {
            headers: headers
        });
    }

    listarCurso() {
        return this.http.get(CursoService.URL, {
            headers: this.buildHeader()
        });
    }
}
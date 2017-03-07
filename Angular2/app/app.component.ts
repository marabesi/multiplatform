import { Component } from '@angular/core';
import { PrimeiroExemplo } from './exemplos/primeiro.exemplo.component';
import { CursosComponent } from './cursos/cursos.components';
import { DataBinding } from './binding/data-binding.component';
import { EventoComponent } from './eventos/evento.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Aula de Angular 2 - 11MOB</h1>
        <p>Fiap - Paulista</p>
        <primeiro-exemplo></primeiro-exemplo>
        <cursos-lista></cursos-lista>
        <data-binding></data-binding>
        <evento-component></evento-component>
    `,
    directives: [ 
        PrimeiroExemplo, 
        CursosComponent,
        DataBinding,
        EventoComponent, 
    ]
})

export class AppComponent { }

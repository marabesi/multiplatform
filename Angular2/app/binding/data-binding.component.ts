import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'data-binding',
    templateUrl: 'data-binding.conponent.html'
})

export class DataBinding {
    url = 'http://www.fiap.com.br';
    urlImagem = 'http://lorempixel.com/400/200/';

    constructor() {
        
    }
}
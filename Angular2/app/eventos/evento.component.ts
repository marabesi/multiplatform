import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'evento-component',
    templateUrl: 'evento.component.html',
})
export class EventoComponent {

    texto: string;
    armazenado: string;

    onClick() {
        alert('Alerta!');
    }

    onKeyUp(event: KeyboardEvent) {
        this.texto = event.target.value;
    }

    onSave(value: string) {
        this.armazenado = value;
    }
}
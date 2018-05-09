import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent {
    public nombre_componente = 'Componente de Fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
    public nombre: string;
    public edad: number;
    public mayorEdad: boolean;
    public trabajosAny: Array<any> = ['Carpintero', 44, 'Fontanero'];
    comodin: any;

    constructor() {
        this.nombre = 'David Cifuentes';
        this.edad = 20;
        this.mayorEdad = true;
        this.comodin = 'SI';
    }

    ngOnInit() {
        this.cambiarEdad(21);
        this.cambiarNombre();
        this.holaMundo(this.nombre, this.edad);
    }

    holaMundo(nombre, edad) {
        alert('Hola ' + nombre + ' ' + edad);
    }

    cambiarNombre() {
        this.nombre = 'Jose Lopez';
    }

    cambiarEdad(edad) {
        this.edad = edad;
    }
}

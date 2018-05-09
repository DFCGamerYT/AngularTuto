import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent implements OnInit {
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

        // Variables y ALcance
        var uno = 8;
        var dos = 15;

        if (uno === 8) {

            let uno = 3;
            var dos = 88;
            console.log('Dentro de IF ' + uno);
        }
        console.log('Fuera del IF ' + uno);
    }

    holaMundo(nombre, edad) {
        console.log('Hola ' + nombre + ' ' + edad);
    }

    cambiarNombre() {
        this.nombre = 'Jose Lopez';
    }

    cambiarEdad(edad) {
        this.edad = edad;
    }
}

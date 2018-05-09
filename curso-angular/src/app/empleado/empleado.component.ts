import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent implements OnInit {
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;

    constructor() {
        this.empleado = new Empleado('David Cifuentes', 21, 'Programador', false);
        this.trabajadores = [
            new Empleado('David Cifuentes', 21, 'Programador', true),
            new Empleado('Ana Lopez', 30, 'Cocinero', false),
            new Empleado('Victor Martinez', 35, 'Ingeniero', true)
        ];
        this.trabajador_externo = false;
    }

    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores);
        console.log(this.trabajador_externo);
    }

    cambiarEmpleado(valor) {
        this.empleado.contratado = valor;
    }

    cambiarTrabajador(indice, valor) {
        this.trabajadores[indice].contratado = valor;
    }

    cambiarExterno(valor) {
        this.trabajador_externo = valor;
    }
}
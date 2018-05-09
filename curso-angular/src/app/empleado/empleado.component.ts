import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent implements OnInit {
    public titulo = 'Listado empleados';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;

    constructor() {
        this.empleado = new Empleado('David Cifuentes', 21, 'Programador', true);
        this.trabajadores = [
            new Empleado('David Cifuentes', 21, 'Programador', true),
            new Empleado('Ana Lopez', 30, 'Cocinero', false),
            new Empleado('Victor Martinez', 35, 'Ingeniero', true)
        ];
    }

    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
}
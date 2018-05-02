import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public nombre_componente = 'Componente de Fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
    public nombre:string = "David Cifuentes";
    public edad:number = 20
    public mayorEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero', 'Alba;il', 'Fontanero'];
    public trabajosAny:Array<any> = ['Carpintero', 44, 'Fontanero'];
    comodin:any = "Cualquier Cosa"
}

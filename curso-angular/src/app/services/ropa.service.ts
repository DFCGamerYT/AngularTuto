import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{
    public nombre_prenda: string = 'Pantalones Vaqueros';

    public coleccion_ropa = ['Pantalones Blancos', 'Camiseta Roja']
    prueba(){
        return this.nombre_prenda;
    }

    addRopa(nombre_prenda){
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    getRopa(){
        return this.coleccion_ropa;
    }

    deleteRopa(index:number){
        this.coleccion_ropa.splice(index, 1);
        return this.getRopa();
    }
}
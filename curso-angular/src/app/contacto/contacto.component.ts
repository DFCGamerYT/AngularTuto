import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo2: string = "Pagina de Contacto de la Web";
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page'];
        });
    }

    redirigir(){
        this._router.navigate(['/contacto','AngularTuto']);
    }

    empleado(){
        this._router.navigate(['/empleado'])
    }

    fruta(){
        this._router.navigate(['/fruta'])
    }
}
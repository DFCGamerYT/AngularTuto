import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [
        RopaService
    ]
})

export class HomeComponent{
    public titulo: string = "Pagina Principal";
    public ropa: string;

    constructor(
        private _ropaService: RopaService
    ){}

    ngOnInit(){
        this.ropa = this._ropaService.prueba();
        console.log(this.ropa);
    }
}
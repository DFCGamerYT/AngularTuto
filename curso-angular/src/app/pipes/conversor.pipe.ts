import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'conversor'
})
export class ConversorPipe implements PipeTransform{
    transform(value: number, por:number): string{
        let result = "La multiplicacion: "+value+ " * " + por + " = " + (value * por);

        return result
    }
}
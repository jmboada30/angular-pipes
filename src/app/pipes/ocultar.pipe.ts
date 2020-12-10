import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): string {
    
    // esta es una forma de hacerlo de forma basica
    
    // if (mostrar) {
    //   return value;
    // }else{
    //   return '*********'
    // }

    // esta es la nueva forma corta y mejor
    return (mostrar) ? value : '*'.repeat(value.length)

  }

}

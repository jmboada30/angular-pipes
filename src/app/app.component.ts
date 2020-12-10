import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
})
export class AppComponent {
  nombre:string = 'capitan America'
  nombre2:string = 'Joel moisEs bOadA VELASquez'
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10]
  PI:number = Math.PI
  porcentaje:number = 0.234
  salario:number = 1234.5
  fecha:Date = new Date()
  activar:boolean = true
  idioma:string = 'es'
  videoUrl:string = 'https://www.youtube.com/embed/yei_OcCiAzQ'
  
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data')
    }, 4500);
  })
  
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera av girando',
      casa: 3258
    }
  }
}

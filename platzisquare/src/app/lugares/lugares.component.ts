import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'platzisquare';
  //variables para trabajar con map
  lat:number=4.5709817;
  lng:number=-75.6557092;

  //arreglo para recorrer por la directiva *ngFor
  lugares:any = [
    //variable active es para practica con la directiva *ngIf
    {id:1 , plan:'gratuito',cercania: 1, distancia: 1,active: true,nombre:'floreria'},
    {id:2 , plan:'gratuito',cercania: 1, distancia: 1.8,active: false,nombre:'veterinaria'},
    {id:3 , plan:'pagado',cercania: 2, distancia: 5,active: true,nombre:'casita'},
    {id:4 , plan:'gratuito',cercania: 3, distancia: 10,active: true,nombre:'carniceria'},
    {id:5 , plan:'gratuito',cercania: 3, distancia: 35,active: false,nombre:'academica'},
    {id:6 , plan:'pagado',cercania: 3, distancia: 120,active: true,nombre:'panaderia'}
  ];

  constructor(){
  }
  
}

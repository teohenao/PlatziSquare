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
    { plan:'gratuito',cercania: 1, distancia: 1,active: true,nombre:'floreria'},
    { plan:'gratuito',cercania: 1, distancia: 1.8,active: false,nombre:'veterinaria'},
    { plan:'pagado',cercania: 2, distancia: 5,active: true,nombre:'casita'},
    { plan:'gratuito',cercania: 3, distancia: 10,active: true,nombre:'carniceria'},
    { plan:'gratuito',cercania: 3, distancia: 35,active: false,nombre:'academica'},
    { plan:'pagado',cercania: 3, distancia: 120,active: true,nombre:'panaderia'}
  ];

  constructor(){
  }
  
}

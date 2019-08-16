import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  //variables para trabajar con map
  lat:number=4.5709817;
  lng:number=-75.6557092;

  //arreglo para recorrer por la directiva *ngFor
  lugares:any = [
    //variable active es para practica con la directiva *ngIf
    { cercania: 1, distancia: 1,active: true,nombre:'floreria'},
    { cercania: 1, distancia: 1.8,active: false,nombre:'veterinaria'},
    { cercania: 2, distancia: 5,active: true,nombre:'casita'},
    { cercania: 3, distancia: 10,active: true,nombre:'cariceria'},
    { cercania: 3, distancia: 35,active: false,nombre:'academica'},
    { cercania: 3, distancia: 120,active: true,nombre:'panaderia'}
  ];

  constructor(){
  }
  
}

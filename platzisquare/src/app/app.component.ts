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
    { active: true,nombre:'floreria'},
    { active: false,nombre:'veterinaria'},
    { active: true,nombre:'casita'},
    { active: true,nombre:'cariceria'},
    { active: false,nombre:'academica'},
    { active: true,nombre:'panaderia'}
  ];

  constructor(){
  }
  
}

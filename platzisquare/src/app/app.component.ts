import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  //variables para trabajar con map
  lat:number=4.6455897;
  lng:number=-75.6017297;

  //arreglo para recorrer por la directiva *ngFor
  lugares:any = [
    //variable active es para practica con la directiva *ngIf
    {active: true,nombre:'floreria'},
    { active: false,nombre:'veterinaria'},
    { active: true,nombre:'casita'}
  ];

  constructor(){
  }
  
}

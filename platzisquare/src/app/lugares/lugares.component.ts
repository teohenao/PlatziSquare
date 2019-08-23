import { Component } from '@angular/core';
import { LugaresService } from '../servicios/lugares.services';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations:[
    trigger('contenedorAnimable',[
      state('inicial',style({
        opacity : 0 ,
        backgroundColor:'green',
        //coordenadas x,y,z,grados
        transform: 'rotate3d(0,0,0,0)'
      })),
      state('final',style({
        opacity : 1 ,
        backgroundColor:'yellow',
        //coordenadas x,y,z,grados
        transform: 'rotate3d(5,10,20,30deg)'
      }))
    ])
  ]
})
export class LugaresComponent {
  title = 'platzisquare';
  state = 'final';

  //variables para trabajar con map
  lat:number=4.5709817;
  lng:number=-75.6557092;

  //variable de lugares
  lugares=null;

  //En el constructor metemos nuestros servicios
  constructor(private lugaresServices: LugaresService){
    //nos devuelve la promesa de la lista, el vaueChanges es necesario segun versiones, y se subscribe a la respuesta
    lugaresServices.getLugares().valueChanges()
    .subscribe( lugares => {
      //debugger detiene el codigo en esta parte, y podemos mirar colocando el click sobre
      //el parametro  de la promesa que si nos esta llegando o no la lista
      //debugger;
      
      //lista de lugares es igual al parametro de respuesta a la promesa
      this.lugares = lugares;
    });
  }
}

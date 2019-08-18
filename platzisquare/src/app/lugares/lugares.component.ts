import { Component } from '@angular/core';
import { LugaresService } from '../servicios/lugares.services';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'platzisquare';
  //variables para trabajar con map
  lat:number=4.5709817;
  lng:number=-75.6557092;

  //variable de lugares
  lugares=null;

  //En el constructor metemos nuestros servicios
  constructor(private lugaresServices: LugaresService){
    //inicializamos el servicio y lo guardamos en lugares del componente
    this.lugares = lugaresServices.getLugares();
  }
  
}

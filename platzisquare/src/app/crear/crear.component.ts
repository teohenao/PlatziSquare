import { Component } from '@angular/core';
import { LugaresService } from '../servicios/lugares.services';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {

  constructor(private lugaresService:LugaresService){}

  lugar:any = {} ;

  //metodo de click boton para guardar lugares en firebase por medio del servicio
  guardarLugar(){
    this.lugaresService.guardarLugar(this.lugar);
  }
 
}

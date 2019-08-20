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
    //Date.now me da la fecha y la hora de hoy en milisegundos, 
    //por tanto es muy dificil que se duplique y nos funciona como id
    this.lugar.id = Date.now();
    this.lugaresService.guardarLugar(this.lugar);
    alert('negocio guardado con exito!');
    //se limpian los campos
    this.lugar = {} ;
  }
 
}

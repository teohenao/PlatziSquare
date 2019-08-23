import { Component } from '@angular/core';
import { AutorizacionServices } from '../servicios/autorizacion.services';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  constructor(private autorizacionService:AutorizacionServices){

  }

  registro:any={};

  //metodo para registrar un usuario por medio de email y clave, recordar habilitar inicio sesion en firebase
  registrar(){
    this.autorizacionService.registro(this.registro.email,this.registro.password);
  }
 
 
}

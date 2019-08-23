import { Component } from '@angular/core';
import { AutorizacionServices } from '../servicios/autorizacion.services';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {

  constructor(private autorizacionService:AutorizacionServices){
    this.autorizacionService.registro('email','password','password2');

  }
 
 
}

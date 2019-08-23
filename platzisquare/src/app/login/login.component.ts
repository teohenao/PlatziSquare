import { Component } from '@angular/core';
import { AutorizacionServices } from '../servicios/autorizacion.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  
  constructor(private autorizacionService:AutorizacionServices){
    this.autorizacionService.login('email','password');

  }
 
}

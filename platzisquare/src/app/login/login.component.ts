import { Component } from '@angular/core';
import { AutorizacionServices } from '../servicios/autorizacion.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private autorizacionService:AutorizacionServices){
  }

  loginParams:any={};

  login(){
    this.autorizacionService.login(this.loginParams.email,this.loginParams.password);
  }

  facebookLogin(){
    //no se le pasa ningun parametro por que de eso se encarga firebase 
    this.autorizacionService.facebookLogin();
  }
 
}

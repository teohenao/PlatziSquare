import { Component } from '@angular/core';
import { AutorizacionServices } from './servicios/autorizacion.services';
//import para rxJs
import 'rxjs/Rx';
//observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn = false;
  //lo inicializamos con un null ya que al hacerlo con un {}, existia medio segundo en el que mostraba [object]
  loggedUser:any = null;
  constructor(private autorizacionService:AutorizacionServices){
    this.autorizacionService.isLogged()
    .subscribe((result)=>{
      //pueden existir dos resultados y en uno de ellos no estar loggeado ojo
      //si se obtiene un resultado y el uid, entonces si esta loggeado, de lo contrario no
      if(result && result.uid){
        this.loggedIn = true;
        //set time es para alcanzar a obtener todos los datos, en lo que imprime get user esta el current user con todos los atributos
        setTimeout(()=>{
          this.loggedUser = this.autorizacionService.getUser().currentUser.email;
          console.log(this.loggedUser);
        },500);
        
      }else{
        this.loggedIn = false;
      }
    },(error)=>{
      this.loggedIn = false;
    })
  }
  
  logout(){
    this.autorizacionService.logout();
  }

}

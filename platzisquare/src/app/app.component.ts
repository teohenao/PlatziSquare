import { Component } from '@angular/core';
import { AutorizacionServices } from './servicios/autorizacion.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn = false;
  constructor(private autorizacionService:AutorizacionServices){
    this.autorizacionService.isLogged()
    .subscribe((result)=>{
      //pueden existir dos resultados y en uno de ellos no estar loggeado ojo
      //si se obtiene un resultado y el uid, entonces si esta loggeado, de lo contrario no
      if(result && result.uid){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    },(error)=>{
      this.loggedIn = false;
    })
  }

}

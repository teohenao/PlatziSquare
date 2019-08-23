import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AutorizacionServices } from './autorizacion.services';

@Injectable()

export class MyGuard implements CanActivate{
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

    
    CanActivate(){
        return this.loggedIn;
    }
}

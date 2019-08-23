import {Injectable} from '@angular/core';

@Injectable()
export class AutorizacionServices {

    //funcion de flecha de login
    public login = ( email:string ,password:string ) => {
        console.log('login');
    }

    //funcion de flecha de registro
    public registro = ( email:string ,password:string,password2:string )=>{
        console.log('registro');
    }
}
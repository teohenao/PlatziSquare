import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AutorizacionServices {

    constructor(private angularFireAuth:AngularFireAuth){

    }

    //funcion de flecha de login
    public login = ( email:string ,password:string ) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
        .then((response)=>{
            alert('Usuario Loggeado con exito');
            console.log(response);
        })
        .catch((error)=>{
            alert('un error ha ocurrido');
            console.log(error);
        })
    }

    

    //funcion de flecha de registro
    public registro = ( email:string ,password:string )=>{
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            alert('Usuario registrado con exito');
            console.log(response);
        })
        .catch((error)=>{
            alert('un error ha ocurrido');
            console.log(error);
        })
    }



}
import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable()
export class AutorizacionServices {

    constructor(private angularFireAuth:AngularFireAuth,private router: Router){
        this.isLogged();
    }
    //funcion para registro con facebook
    public facebookLogin(){
        return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((result)=>{
            console.log(result);
            alert('Usuario loggeado con facebook');
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    

    //funcion de flecha de login
    public login = ( email:string ,password:string ) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
        .then((response)=>{
            alert('Usuario Loggeado con exito');
            console.log(response);
            this.router.navigate(['lugares']);
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
            this.router.navigate(['lugares']);
        })
        .catch((error)=>{
            alert('un error ha ocurrido');
            console.log(error);
        })
    }

    //funcion para verificar si el usuario se encuentra loggeado en la aplicacion
    public isLogged(){
        //authState trae un identificador unico que solo existe cuando esta loggeado
        return this.angularFireAuth.authState;
    }

    public logout(){
        this.angularFireAuth.auth.signOut();
        this.router.navigate(['lugares']);
    }

    //devuelve el usuario que esta loggeado
    public getUser(){
        return this.angularFireAuth.auth;
    }
    


}
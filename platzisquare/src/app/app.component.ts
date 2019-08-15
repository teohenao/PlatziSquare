import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  //binding sencillo
  a=2;
  b=6;
  listo=false;
  
  //ngModel es bindeo de datos hacia ambos lados
  //variable de ejemplo de two bindeo, importar el modulo para que two funcione en app module
  nombre : string = '';
  apellido: string = '';

  constructor(){
    //setTimeout espera determinado tiempo antes de ejecutar una funcion
    //event binding
    setTimeout(()=>{
      this.listo=true;
      
    },3000)
  }
  hacerAlgo(){
    alert('haciendo algo!');
  }
  
}

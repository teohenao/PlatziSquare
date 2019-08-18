import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares:any = [
    {id:1 , plan:'gratuito',cercania: 1, distancia: 1,active: true,nombre:'floreria', 
    descripcion:'descripcion de este negocio, despues tendremos mas detalles'},
    {id:2 , plan:'gratuito',cercania: 1, distancia: 1.8,active: false,nombre:'veterinaria', 
    descripcion:'descripcion de este negocio, despues tendremos mas detalles'},
    {id:3 , plan:'pagado',cercania: 2, distancia: 5,active: true,nombre:'casita',
    descripcion: ' descripcion de esta monda'},
    {id:4 , plan:'gratuito',cercania: 3, distancia: 10,active: true,nombre:'carniceria',
     descripcion:'descripcion de este negocio, despues tendremos mas detalles'},
    {id:5 , plan:'gratuito',cercania: 3, distancia: 35,active: false,nombre:'academica',
     descripcion:'descripcion de este negocio, despues tendremos mas detalles'},
    {id:6 , plan:'pagado',cercania: 3, distancia: 120,active: true,nombre:'panaderia',
     descripcion:'descripcion de este negocio, despues tendremos mas detalles'}
  ];
  id = null;
  lugar:any = {};

    //capturamos el parametro que nos envian
    constructor(private route: ActivatedRoute){
        //console para ver que id nos esta llegando como parametro al detalle
        console.log('id : ' + this.route.snapshot.params['id']);
        //console para ver el objeto que tiene esos parametros que enviamos, si aparece indefinido mirar si esta snapchot
        console.log(this.route.snapshot.queryParams['action']);

        //asignamos al parametro id de la clase, el id que nos envian
        this.id = this.route.snapshot.params['id'];
        
        //le asignamos a lugar el resultado de buscarLugar correspondiente a el id que nos pasan
        //como filter nos devuelve un arreglo, entonces lugar es un arreglo
        this.lugar = this.buscarLugar();
    }

    //funcion que dependiendo del id que nos envian, mostremos el correspondiente
    buscarLugar(){
        //filter nos regresa un arreglo
        return this.lugares.filter((lugar)=>{
            //especie de forEach
            return lugar.id == this.id;
            //regresamos el de la posicion en 0, o si no lo enccontro, entonces null
        })[0] || null;
    }
}

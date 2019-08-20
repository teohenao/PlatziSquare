import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';

//para que pueda ser inyectado en otros componentes, u otros componentes puedan ser inyectados en este servicio
@Injectable()
export class LugaresService{

    //inyectar modulo de firebase en nuestro servicio, adBD nos permite iteractuar con la base de datos de firebase
    constructor(private afDB:AngularFireDatabase){}

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
      //Metodo para obtener el arreglo lugares, buenas practicas
      public getLugares(){
          return this.lugares;
      }
      //metodo para obtener el lugar por determinado id, para detalle de un lugar, prametro id, que le pasara en componente
      public buscarLugar(id){
        return this.lugares.filter((lugar)=>{
            //especie de forEach
            return lugar.id == id;
            //regresamos el de la posicion en 0, o si no lo enccontro, entonces null
        })[0] || null;
    }
    //metodo publico para guardar informacion en firebase
    public guardarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/1').set(lugar);
    }
    
}
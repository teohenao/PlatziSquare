import { Component } from '@angular/core';
import { LugaresService } from '../servicios/lugares.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  
  lugar:any = {};
  id:any = null;

  constructor(private lugaresService:LugaresService,
    //private route es para recibir el parametro de la vista anterior
    private route: ActivatedRoute){
      //obtenemos el id que nos pasan
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      
      if(this.id != 'nuevo'){
        this.lugaresService.getLugar(this.id)
            .subscribe((lugar)=>{
              this.lugar = lugar;

            });
      }
    }
  //metodo de click boton para guardar lugares en firebase por medio del servicio
  guardarLugar(){
    var direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion)
    //notas, result tipo any, para asi obtener lo que existe en ese arreglo, o el tipo que sea
    .subscribe((result:any)=>{
      //debugger; 
      //para que funcione, activar geoCoding en google api,
      //latitud, es igual a el archivo json que tenemos, navegando hasta lat, en console gracias al debugger llegamos a lat
      this.lugar.lat = result.results[0].geometry.location.lat;
      this.lugar.lng = result.results[0].geometry.location.lng;

    
    if(this.id != 'nuevo'){
      this.lugaresService.editarLugar(this.lugar);
      alert('negocio editado con exito!');

    }else{
    //Date.now me da la fecha y la hora de hoy en milisegundos, 
    //por tanto es muy dificil que se duplique y nos funciona como id
    this.lugar.id = Date.now();
    this.lugaresService.guardarLugar(this.lugar);
    alert('negocio guardado con exito!');
    }
    
    //se limpian los campos
    this.lugar = {} ;
    });



    
  }
 
}

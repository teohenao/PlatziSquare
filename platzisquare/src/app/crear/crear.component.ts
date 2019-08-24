import { Component } from '@angular/core';
import { LugaresService } from '../servicios/lugares.services';
import { ActivatedRoute } from '@angular/router';
//observable
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { HttpClient } from"@angular/common/http";




@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  
  lugar:any = {};
  id:any = null;
  //String de observable
  results: Observable<any>;
  private searchField: FormControl;

  constructor(
    private lugaresService:LugaresService,
    private route: ActivatedRoute,
    private http:HttpClient){

      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      if(this.id != 'nuevo'){
        this.lugaresService.getLugar(this.id)
            .subscribe((lugar)=>{
              this.lugar = lugar;
            });
      }

      const URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0&address=';
      //nos permite que search fiel va a tener metodos que nos va a decir en que momento esta cambiando
      this.searchField = new FormControl();
      //vamos a estar escuchando los cambios se searchFields, cada que el usuario ingresa una letra, escuchamos
      this.results = this.searchField.valueChanges.pipe(
      debounceTime(500),
      switchMap(q => this.http.get<any>(`${URL}?address=${q}`)),
      map(res => res.results)
    );
    }
    seleccionarDireccion(result) {
      const addressComponents = result.address_components;
      const adrressParams: any = {};
  
      for (let i = 0, len = addressComponents.length; i < len; i++) {
        const type = addressComponents[i].types[0].toString();
        switch (type) {
          case 'street_number':
            adrressParams.street_number = addressComponents[i].long_name;
            break;
          case 'route':
            adrressParams.route = addressComponents[i].long_name;
            break;
          case 'locality':
            adrressParams.locality = addressComponents[i].long_name;
            break;
          case 'country':
            adrressParams.country = addressComponents[i].long_name;
            break;
        }
      }
      this.lugar.calle = `${adrressParams.route}${adrressParams.street_number}`;
      this.lugar.ciudad = adrressParams.locality;
      this.lugar.pais = adrressParams.country;
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

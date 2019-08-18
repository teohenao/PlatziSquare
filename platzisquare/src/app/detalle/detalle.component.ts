import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../servicios/lugares.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  
  id = null;
  lugar:any = {};

    //capturamos el parametro que nos envian
    constructor(private route: ActivatedRoute, private lugaresService: LugaresService){
        //console para ver que id nos esta llegando como parametro al detalle
        console.log('id : ' + this.route.snapshot.params['id']);
        //console para ver el objeto que tiene esos parametros que enviamos, si aparece indefinido mirar si esta snapchot
        console.log(this.route.snapshot.queryParams['action']);

        //asignamos al parametro id de la clase, el id que nos envian
        this.id = this.route.snapshot.params['id'];
        
        //le asignamos a lugar que va a mostrar, el lugar que nos devuelve el servicio que encontro
        this.lugar = this.lugaresService.buscarLugar(this.id);
    }

}

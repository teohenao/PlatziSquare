import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    //capturamos el parametro que nos envian
    constructor(private route: ActivatedRoute){
        //console para ver que id nos esta llegando como parametro al detalle
        console.log('id : ' + this.route.snapshot.params['id']);
        //console para ver el objeto que tiene esos parametros que enviamos, si aparece indefinido mirar si esta snapchot
        console.log(this.route.snapshot.queryParams['action']);
    }
}

import { Directive, HostListener } from "@angular/core";

@Directive({
    //el a es para que solo aplique para hiperlinks e hipervinculos, osea donde aparece en el html <a ..... >
    selector: 'a[contar-clicks]'
})
export class ContarClicksDirectiva {
    //variable encargada de llevar el conteo de los clicks que vamos haciendo
    clickN = 0; 

    //HostListener ayuda a escuchar los eventos 
    //tres parametros (evento,arreglo)
    //target es el boton o elemento de la vista html dependiendo con lo que estemos trabajando
    @HostListener('click',['$event.target'])onClick(btn){
        console.log('a',btn,"numero de clicks: " , this.clickN++);
    }
}
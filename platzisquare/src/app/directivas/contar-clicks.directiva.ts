import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    //el a es para que solo aplique para hiperlinks e hipervinculos, osea donde aparece en el html <a ..... >
    // para que funcione opacity toca cambiar elemento de ancla <a/> a <li/>
    selector: 'li[contar-clicks]'
})
export class ContarClicksDirectiva {
    //variable encargada de llevar el conteo de los clicks que vamos haciendo
    clickN = 0; 

    //HostListener ayuda a escuchar los eventos de parte del usuario en el dom
    //tres parametros (evento,arreglo)
    //target es el boton o elemento de la vista html dependiendo con lo que estemos trabajando
    @HostListener('click',['$event.target'])onClick(btn){
        console.log('a',btn,"numero de clicks: " , this.clickN++);

        //al darle click aumentamos opacidad
        this.opacity += .1;
    }


    //HostBinding editar elemento del dom o html desde la directiva
    //parametros, (atributoHtml a editar, )
    @HostBinding('style.opacity') opacity:number = .1;


}
import { Directive, OnInit, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector:'[resaltar]'
})
export class ResaltarDirectiva implements OnInit{

    //ElementRef es importante para crear una referencia en html y poder referenciarla en el ts
    //Renderer2  Permite manipular elementos de html pero mas enfocados en css
    constructor(private elRef: ElementRef,private renderer:Renderer2){

    }

    @Input('resaltar') plan:string='';
    
    ngOnInit(){
        if(this.plan ==='pagado'){
            //parametros (elementoNativo,AtributoCssAModificar,ValorCss)
            this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
            this.renderer.setStyle(this.elRef.nativeElement,'font-weight','bold');

        }

    }
}
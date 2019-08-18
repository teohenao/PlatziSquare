import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirectiva } from './directivas/resaltar.directiva';
import { ContarClicksDirectiva } from './directivas/contar-clicks.directiva';
import { Routes } from '@angular/router';

//rutas de navegacion en angular 
const appRoutes: Routes = [
  //cuando no hay ningun segmento despues del dominio por defecto abre el componente asignado
  {path:'',component: AppComponent}
  //para /lugares se carga el componente asignado
  {path:'/lugares',component: AppComponent}
];


@NgModule({
  declarations: [
    //declaramos las directivas creadas para poder utilizarlas, ResaltarDirectiva
    ResaltarDirectiva,
    //declaramos directiva de clicks 
    ContarClicksDirectiva,
    AppComponent
  ],
  imports: [
    BrowserModule,
    //forms module es necesario para trabajar con ngModel
    FormsModule,
    //anm module es necesario para trabajar con angular maps, en la pagina guian para general la clave, y activar el api tambien
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBu-0snnYFFYBztZsD-cxf03HYQsqU1pRo'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

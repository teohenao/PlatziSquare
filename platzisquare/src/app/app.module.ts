import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirectiva } from './directivas/resaltar.directiva';
import { ContarClicksDirectiva } from './directivas/contar-clicks.directiva';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';

//rutas de navegacion en angular 
const appRoutes: Routes = [
  //cuando no hay ningun segmento despues del dominio por defecto abre el componente asignado
  {path:'',component: LugaresComponent},
  {path:'detalle',component: DetalleComponent},
  //para /lugares se carga el componente asignado
  {path:'lugares',component: LugaresComponent}
];


@NgModule({
  declarations: [
    //declaramos las directivas creadas para poder utilizarlas, ResaltarDirectiva
    ResaltarDirectiva,
    //declaramos directiva de clicks 
    ContarClicksDirectiva,
    DetalleComponent,
    LugaresComponent,
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
    //para que nuestro proyecto funcione con mas de un componente es necesario hacer este import
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

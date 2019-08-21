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
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './servicios/lugares.services';
import { CrearComponent } from './crear/crear.component';

//imports necesarios para trabajar con firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

//import de http
import { HttpClientModule } from'@angular/common/http';



//rutas de navegacion en angular 
const appRoutes: Routes = [
  //cuando no hay ningun segmento despues del dominio por defecto abre el componente asignado
  {path:'',component: LugaresComponent},
  //para agregar parametros a la ruta /:parametro1/:parametro2 para dos parametros
  {path:'detalle/:id',component: DetalleComponent},
  //para /lugares se carga el componente asignado
  {path:'lugares',component: LugaresComponent},
  {path:'contacto',component: ContactoComponent},
  {path:'crear',component: CrearComponent}

];


@NgModule({
  declarations: [
    //declaramos las directivas creadas para poder utilizarlas, ResaltarDirectiva
    ResaltarDirectiva,
    //declaramos directiva de clicks 
    ContarClicksDirectiva,
    DetalleComponent,
    ContactoComponent,
    CrearComponent,
    LugaresComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    //forms module es necesario para trabajar con ngModel
    FormsModule,
    //anm module es necesario para trabajar con angular maps, en la pagina guian para general la clave, y activar el api tambien
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
     //Clave mia  AIzaSyBu-0snnYFFYBztZsD-cxf03HYQsqU1pRo
    }),
    //para que nuestro proyecto funcione con mas de un componente es necesario hacer este import
    RouterModule.forRoot(appRoutes),
    //para que el proyecto se conecte con la base de datos de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    //Pare http
    HttpClientModule,
    AppRoutingModule
  ],
  //aca se declaran los servicios
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

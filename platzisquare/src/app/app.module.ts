import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
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

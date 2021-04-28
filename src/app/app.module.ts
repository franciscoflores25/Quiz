import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './clima/header/header.component';
import { HomeComponent } from './clima/home/home.component';
import { RegionesComponent } from './clima/regiones/regiones.component';
import {MatButtonModule} from '@angular/material/button';
import { MetropolitanaComponent } from './clima/metropolitana/metropolitana.component';
import { BiobioComponent } from './clima/biobio/biobio.component';
import { AraucaniaComponent } from './clima/araucania/araucania.component';
import { ValparaisoComponent } from './clima/valparaiso/valparaiso.component';
import {MatRadioModule} from '@angular/material/radio';
import { ActualizarComponent } from './clima/actualizar/actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegionesComponent,
    MetropolitanaComponent,
    BiobioComponent,
    AraucaniaComponent,
    ValparaisoComponent,
    ActualizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

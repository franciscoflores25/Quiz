import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ValparaisoComponent} from '../app/clima/valparaiso/valparaiso.component';
import{MetropolitanaComponent} from '../app/clima/metropolitana/metropolitana.component';
import {BiobioComponent} from '../app/clima/biobio/biobio.component';
import {AraucaniaComponent} from '../app/clima/araucania/araucania.component';
import {ActualizarComponent} from '../app/clima/actualizar/actualizar.component';


const routes: Routes = [
  {path:"", component:ValparaisoComponent},
  {path:"metropolitana", component:MetropolitanaComponent},
  {path:"biobio", component:BiobioComponent},
  {path:"araucania", component:AraucaniaComponent},
  {path:"actualizar/:id", component:ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

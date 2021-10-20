import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaProductoComponent } from './Componentes/alta-producto/alta-producto.component';
import {BienvenidoComponent} from './Componentes/bienvenido/bienvenido.component';
import {ErrorComponent} from './Componentes/error/error.component';
import {LoginComponent} from './Componentes/login/login.component';

const routes: Routes=[
  {path: 'home', component:BienvenidoComponent},
  {path: 'bienvenidos', component:BienvenidoComponent},
  {path:'altaProducto', component:AltaProductoComponent},
  {path:'login', component:LoginComponent},
  {path:'',component:BienvenidoComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

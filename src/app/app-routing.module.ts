import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaProductoComponent } from './Componentes/alta-producto/alta-producto.component';
import {BienvenidoComponent} from './Componentes/bienvenido/bienvenido.component';
import {ErrorComponent} from './Componentes/error/error.component';
import {LoginComponent} from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';

const routes: Routes=[
  {path: 'home', component:BienvenidoComponent},
  {path: 'bienvenidos', component:BienvenidoComponent},
  {path:'altaProducto', component:AltaProductoComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

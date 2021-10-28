import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionUsuarioComponent } from './Componentes/administracion-usuario/administracion-usuario.component';
import { AltaProductoComponent } from './Componentes/alta-producto/alta-producto.component';
import {BienvenidoComponent} from './Componentes/bienvenido/bienvenido.component';
import {ErrorComponent} from './Componentes/error/error.component';
import {LoginComponent} from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { VerificacionCuentaComponent } from './Componentes/verificacion-cuenta/verificacion-cuenta.component';
import {NuevoTurnoComponent} from './Componentes/nuevo-turno/nuevo-turno.component';

const routes: Routes=[
  {path: 'home', component:BienvenidoComponent},
  {path: 'bienvenidos', component:BienvenidoComponent},
  {path:'altaProducto', component:AltaProductoComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'verificacion', component:VerificacionCuentaComponent},
  {path:'administracionUsuarios', component:AdministracionUsuarioComponent},
  {path:'nuevoTurno', component:NuevoTurnoComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

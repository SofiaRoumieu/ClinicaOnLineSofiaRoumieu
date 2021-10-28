import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
//import { MatDivider} from '@angular/material/divider';

//capcha
import { NgxCaptchaModule } from 'ngx-captcha';
import { RecaptchaModule } from 'ng-recaptcha';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { firebase } from "../environments/environment";
import { MenuComponent } from './Componentes/menu/menu.component';
import { AltaProductoComponent } from './Componentes/alta-producto/alta-producto.component';
import { TablaPaisesComponent } from './Componentes/tabla-paises/tabla-paises.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { VerificacionCuentaComponent } from './Componentes/verificacion-cuenta/verificacion-cuenta.component';
import { AdministracionUsuarioComponent } from './Componentes/administracion-usuario/administracion-usuario.component';
import { NuevoTurnoComponent } from './Componentes/nuevo-turno/nuevo-turno.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { ListaEspecialidadesComponent } from './Componentes/lista-especialidades/lista-especialidades.component';
import { ListaProfesionalesComponent } from './Componentes/lista-profesionales/lista-profesionales.component';
import { ListaFechaHoraComponent } from './Componentes/lista-fecha-hora/lista-fecha-hora.component';
import { SortTurnosPipe } from './pipes/sort-turnos.pipe';
import { MesesPipe } from './pipes/meses.pipe';
import { ListadoTurnosComponent } from './Componentes/listado-turnos/listado-turnos.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    MenuComponent,
    AltaProductoComponent,
    TablaPaisesComponent,
    RegistroComponent,
    VerificacionCuentaComponent,
    AdministracionUsuarioComponent,
    NuevoTurnoComponent,
    FechaPipe,
    ListaEspecialidadesComponent,
    ListaProfesionalesComponent,
    ListaFechaHoraComponent,
    SortTurnosPipe,
    MesesPipe,
    ListadoTurnosComponent,
    BusquedaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatStepperModule,
    //MatDivider,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    //AngularFireStorageModule
    NgxCaptchaModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

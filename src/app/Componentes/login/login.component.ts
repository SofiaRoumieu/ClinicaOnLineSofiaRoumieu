import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  registro = false;
  emailClass:'';
  claveClass:'';
  email:string;
  clave:string;
  recaptcha: any=false;
  siteKey:string;
  desa:boolean = false;

  constructor(private route: Router,
              private authService: AuthService,
              private db: AngularFirestore,
              private api: ApiService) {

//this.api.ObtenerPaises().subscribe((paises:any)=>{console.log(paises)}, error=>{console.log(error)});
//this.api.ObtenerMiGit().subscribe((miGit:any)=>{console.log(miGit)}, error=>{console.log(error)});
}

  usuarios: Array<any> = [
  { id: 0, nombre: "Admin", correo: "admin@admin.com", clave: "123456" },
  { id: 1, nombre: "Paciente", correo: "roumieusofia@gmail.com", clave: "123456" },
  { id: 2, nombre: "Profesional", correo: "kvatano@gmail.com", clave: "123456" }
  
] 
            

  ngOnInit() {
   
  }

  onChange(id) {
    console.log("llega");
    console.info(this.usuarios[id].correo);
    this.email = this.usuarios[id].correo;
    this.clave = this.usuarios[id].clave;
  }

  /*admin(){
    
    this.usuario.email = "admin@mail.com";
    this.usuario.pass = "123456";
  }
  empleado(){
    this.usuario.email = "empleado@mail.com";
    this.usuario.pass = "123456";
  }*/
  Ingresar() {
    console.log(this.email," + ", this.clave);

    this.authService.signIn(this.email, this.clave).then(res => {
      console.log('Login exitoso', res);
      this.usuario.email=this.email;
      this.usuario.pass=this.clave;

      this.db.collection('ingresos').add({
          email: this.email,
          fechaacceso: firestore.Timestamp.fromDate(new Date()),
          dato: 'dato de prueba'
      })
      .then(docRef => {
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
        this.route.navigate(['home']);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
          console.error('Error adding document: ', error);
      });
    }).catch(error => {
      console.log('Login error: ', error);
      this.route.navigate(['error']);
    });
  }

  Registrar() {
    console.log(this.usuario);
    this.authService.register(this.usuario).then(res => {
      console.log('Registro exitoso', res);
      this.db.collection('usuarios').add({
          email: this.usuario.email,
          nombre: this.usuario.nombre
      })
      .then(docRef => {
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
        this.route.navigate(['home']);
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
          console.error('Error adding document: ', error);
      });
    }).catch(error => {
      console.log('Registro error: ', error);
      this.route.navigate(['error']);
    });
  }

}
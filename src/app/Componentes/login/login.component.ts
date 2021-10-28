import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import {ApiService} from '../../services/api.service';
import Swal from 'sweetalert2';

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
  //siteKey:string;
  desa:boolean = false;
  estadoUsuario:number;
  rol:string;

  constructor(private route: Router,
              private authService: AuthService,
              private db: AngularFirestore,
              private api: ApiService) {

//this.api.ObtenerPaises().subscribe((paises:any)=>{console.log(paises)}, error=>{console.log(error)});
//this.api.ObtenerMiGit().subscribe((miGit:any)=>{console.log(miGit)}, error=>{console.log(error)});
}
          
  ngOnInit() {
   
  }

  cargarAdmin(){
    this.email = "roumieusofia@gmail.com";
    this.clave = "123456";
  }

  cargarProfesional(numero:number){
    switch(numero){
      case 1:
        this.email = "profesional1@gmail.com" ;
        this.clave = "123456";
        break;
      case 2:
        this.email = "luzdemarfil_sr@hotmail.com";
        this.clave = "123456";
        break;
    }
  }
  cargarPaciente(numero:number){
    switch(numero){
      case 1:
        this.email = "kvatano@gmail.com";
        this.clave = "123456";
        break;
      case 2:
        this.email = "paciente2@gmail.com";
        this.clave = "123456";
        break;
      case 3:
        this.email = "paciente3@gmail.com";
        this.clave = "123456";
        break;
    }
  }


  Ingresar() {
    console.log(this.email," + ", this.clave);
    
    this.authService.getUserByMail(this.email).then(res =>{
      if(res.length > 0)
      { 
         this.rol=res[0].rol;
         this.estadoUsuario=res[0].estado;
        if(this.estadoUsuario==1 && this.rol=="profesional"){
          Swal.fire({
            title:'Cuenta no validada',
            text:'Su cuenta no fue validada por el administrador.',
            icon:'error',
            confirmButtonText:'Cerrar'
          });
          console.log("mail no validado por administrador");
        }
        else{
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
            Swal.fire({
              title:'Error al iniciar sesión',
              text:'Error: '+ error,
              icon:'error',
              confirmButtonText:'Cerrar'
            });
            console.log('Login error: ', error);
            this.route.navigate(['error']);
          });
        }

      }
    })
  }

  Registrar() {
    console.log(this.usuario);
    this.authService.register(this.usuario).then(res => {
      Swal.fire({
        title:'Registro exitoso',
        text:'El usuario fue registrado correctamente.',
        icon:'success',
        confirmButtonText:'Cerrar'
      });
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
      Swal.fire({
        title:'Error al registrar usuario.',
        text:'Error: '+error,
        icon:'error',
        confirmButtonText:'Cerrar'
      });
      this.route.navigate(['error']);
    });
  }

}
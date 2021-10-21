import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
    public storage:AngularFireStorage,
    /*private toas:ToastrService*/) { }

  public async signIn(email:string, pass:string) {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }

  public async register(usuario: Usuario) {
    return this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass);
  }
  isLoggedIn() {
    return this.afAuth.authState;
  }
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  async registerPaciente(usuario: Usuario, img1, img2) {
    var router = this.router;
    var dbRef = this.db;
    var ad = this;

      this.uploadImg(usuario, img1, img2).then(res =>{
      console.log("llega");
       this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass)
     .then(function(credencial) {

       ad.router.navigate(['/verificacion']);                  
       ad.sendVerificationEmail().then(res =>{
        console.log("Se envio bien el mail");
      }).catch(error =>{
        console.log("No llega el mail");
      });  

       dbRef.collection('usuarios').doc(credencial.user.uid).set({
         uid: credencial.user.uid,
         nombre: usuario.nombre,
         apellido: usuario.apellido,
         email: usuario.email,
         rol: usuario.tipo,
         dni:usuario.dni,
         estado:1,
         edad:usuario.edad,
         img1: usuario.img1,
         img2: usuario.img2
       })
       .then(function (docRef) {
         
         console.log("Bien");
       });
       credencial.user.getIdToken()
         .then(function (token) {
         localStorage.setItem('token', token);
       });
     })
     .catch(function (error) {
       console.error("Error: ", error);
       //ad.toas.error(error,"Error");
     });
     
     
    })
    
  }
  
  //Registro Profesional
  public registerProfesional(usuario:Usuario,especialidades:Array<any>,img1)
  {
     
    var router = this.router;
    var dbRef = this.db;
    var ad = this;

      this.uploadImgProf(usuario, img1).then(res =>{
      console.log("llega");
       this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass)
     .then(function(credencial) {

       ad.router.navigate(['/verificacion']);                  
       ad.sendVerificationEmail().then(res =>{
        console.log("Se envio bien el mail");
      }).catch(error =>{
        console.log("No llega el mail");
      });  

       dbRef.collection('usuarios').doc(credencial.user.uid).set({
         uid: credencial.user.uid,
         nombre: usuario.nombre,
         apellido: usuario.apellido,
         email: usuario.email,
         rol: usuario.tipo,
         dni:usuario.dni,
         estado:1,
         img1: usuario.img1,
         img2: usuario.img2
       })
       .then(function (docRef) {
         
         console.log("Bien");
       });
       credencial.user.getIdToken()
         .then(function (token) {
         localStorage.setItem('token', token);
       });
     })
     .catch(function (error) {
       console.error("Error: ", error);
       //ad.toas.error(error,"Error");
     });
     
     
    })
    
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  public uploadImg( usuario: Usuario, imagen1, imagen2){
    return new Promise((resolve,rejects) =>{
      this.subirArchivo(usuario.email+"_img1",imagen1,{nombre:usuario.nombre,
        apellido:usuario.apellido,
        dni:usuario.dni,
        id:usuario.id,
        email:usuario.email,
        rol:usuario.rol,
      
      
      }).then((img)=>{
          this.subirArchivo(usuario.email+"_img2",imagen2,{nombre:usuario.nombre,
            apellido:usuario.apellido,
            dni:usuario.dni,
            id:usuario.id,
            email:usuario.email,
            rol:usuario.rol,
          }).then(img2=>{
           img.ref.getDownloadURL().then(data=>{
            usuario.img1 = data;
            console.log(data); 
            img2.ref.getDownloadURL().then( data2=>{
              usuario.img2 = data2;
              resolve(data2);
              
             });
           });  
          });
        });
    })  

    }


    public uploadImgProf( usuario: Usuario, imagen1){
      return new Promise((resolve,rejects) =>{
        this.subirArchivo(usuario.email+"_img1",imagen1,{nombre:usuario.nombre,
          apellido:usuario.apellido,
          dni:usuario.dni,
          id:usuario.id,
          email:usuario.email,
          rol:usuario.rol,
        
        
        }).then((img)=>{
           /* this.subirArchivo(usuario.email+"_img2",imagen2,{nombre:usuario.nombre,
              apellido:usuario.apellido,
              dni:usuario.dni,
              id:usuario.id,
              email:usuario.email,
              rol:usuario.rol,
            }).then(img2=>{*/
             img.ref.getDownloadURL().then(data=>{
              usuario.img1 = data;
              console.log(data); 
              resolve(data);
              /*img2.ref.getDownloadURL().then( data2=>{
                usuario.img2 = data2;
                resolve(data2);
                
               });*/
             });  
            });
         // });
      })  
  
      }
  
  
  

    subirArchivo(nombreArchivo: string, datos: any,metadata:any) {
      return this.storage.upload(nombreArchivo, datos, {customMetadata:metadata });
    }
  

}

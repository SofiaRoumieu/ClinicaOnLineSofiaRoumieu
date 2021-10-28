import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarios;
  dbUsersRef:AngularFirestoreCollection<any>;
  dbEspecialidadRef: AngularFirestoreCollection<any>;
  dbTurnosRef:AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private authService: AuthService) { 
    this.usuarios = db.collection("usuarios").snapshotChanges();
    this.dbUsersRef=this.db.collection("usuarios");
    this.dbEspecialidadRef = this.db.collection("especialidades");
    this.dbTurnosRef = this.db.collection("turnos");
  }

  getEspecialidades() {
    return this.dbEspecialidadRef.valueChanges();
  }

  AgregarEspecialidad(especialidad){
    this.dbEspecialidadRef.add({...especialidad});
  }

  async getProfesionalesByEspecialidad(especialidad:string)
  { 
    let usrsRef = await this.dbUsersRef.ref.where("rol", "==", "profesional").get();
    let listado:Array<any> = new Array<any>();
    let profesionales = [];
    let aux = [];
    // return usrsRef;

     usrsRef.docs.map(function(x){
        listado.push(x.data());
    });

    listado.forEach(element => {
        aux.push(element.especialidades)
        aux[listado.indexOf(element)].forEach(res => {

          if(res == especialidad)
          {
            profesionales.push(element);
          }
          
        });
    });

    return profesionales;
  }

  getUserByUid(uid: string) {
    return this.dbUsersRef.doc(uid).valueChanges();
  }

  async TurnoFecha(fecha:string,hora:any)
  {
    let turnos = [];
    let turnosUfs =  await this.dbTurnosRef.ref.where("fecha", "==", fecha).where("hora","==",hora).get();
      
    turnosUfs.docs.map(function(x){
      turnos.push(x.data());
    }); 
    return turnos;
  }

  getTurnos(){
    return this.dbTurnosRef.valueChanges();
  }

  /*async getUserByMail(uid: string) {

    let usrsRef = await this.usuarios.ref.where("uid", "==", uid).get();
    let listado:Array<any> = new Array<any>();
    console.log(usrsRef);
    usrsRef.docs.map(function(x){
        listado.push(x.data());
    });
    return listado;
  }*/

}
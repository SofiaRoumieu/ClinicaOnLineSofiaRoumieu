import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarios;
  dbEspecialidadRef: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore, private authService: AuthService) { 
    this.usuarios = db.collection("usuarios").snapshotChanges();
    this.dbEspecialidadRef = this.db.collection("especialidades");
  }

  getEspecialidades() {
    return this.dbEspecialidadRef.valueChanges();
  }


}
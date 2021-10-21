import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dbEspecialidadRef: AngularFirestoreCollection<any>;
  constructor(private db: AngularFirestore, private authService: AuthService) { 
    this.dbEspecialidadRef = this.db.collection("especialidades");
  }

  getEspecialidades() {
    return this.dbEspecialidadRef.valueChanges();
  }
}

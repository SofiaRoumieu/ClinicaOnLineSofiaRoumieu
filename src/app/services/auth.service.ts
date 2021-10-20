import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router) { }

  public async signIn(usuario: Usuario) {
    return this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.pass);
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
}

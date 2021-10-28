import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  tipoUsuario: string;
  seleccionado:boolean;
  tipoAccion:string;
  
  constructor(private router: Router,
    private authService: AuthService,
    private db: AngularFirestore) { }

 
  ngOnInit(): void {
    this.seleccionado=false;
    this.authService.getUserByMail(this.authService.getCurrentUserMail()).then(res =>{
      if(res.length > 0)
      { 
         this.tipoUsuario=res[0].rol;
         console.log(this.tipoUsuario);
      }
    }, error=>{
      Swal.fire({
      title:'Error',
      text:'Error al consultar usuario logueado: '+error,
      icon:'error',
      confirmButtonText:'Cerrar'
    });
    })
  }

  MostrarComponente(componente:string)
  {
    switch(componente){
      case 'administracionUsuario':
        this.router.navigate(['/administracionUsuarios']);  
        break;
      case 'nuevoTurno':
        this.router.navigate(['/nuevoTurno']);
        break;
      case 'misTurnos':
        this.router.navigate(['/listadoTurnos']);
      break;
      case 'consultarAgenda':
        this.router.navigate(['/listadoTurnos']);
        break;
    }
  }

}

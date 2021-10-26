import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-administracion-usuario',
  templateUrl: './administracion-usuario.component.html',
  styleUrls: ['./administracion-usuario.component.css']
})
export class AdministracionUsuarioComponent implements OnInit {

  solapaAMostrar:string;
  /*pagePacientes = 1;
  pageEspecialistas = 1;
  pageAdministradores = 1;
  pageSize = 5;*/


  listaUsuarios=[];

  pacientes;
  pacientesPag;

  profesionales;
  profesionalesPag;

  administradores;
  administradoresPag;

  constructor(private dataSvc:AuthService,private router: Router) {
    this.dataSvc.TraerTodos().subscribe((res)=>{
      
      this.listaUsuarios = res;
      this.pacientes = this.listaUsuarios.filter(user => user.rol=='paciente');
      this.profesionales = this.listaUsuarios.filter(user => user.rol=='profesional');
      this.administradores= this.listaUsuarios.filter(user => user.rol=='admin');
      //this.refreshPacientes();
      //this.refreshEspecialistas();
      //this.refreshAdministradores();
    })
   }

  ngOnInit(): void {
    this.solapaAMostrar="admin";
  }


 /* refreshPacientes() {
    this.pacientesPag = this.pacientes
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.pagePacientes - 1) * this.pageSize, (this.pagePacientes - 1) * this.pageSize + this.pageSize);
  }

  refreshEspecialistas() {
    this.profesionalesPag = this.profesionales
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.pageEspecialistas - 1) * this.pageSize, (this.pageEspecialistas - 1) * this.pageSize + this.pageSize);
  }

  refreshAdministradores() {
    this.administradoresPag = this.administradores
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.pageAdministradores - 1) * this.pageSize, (this.pageAdministradores - 1) * this.pageSize + this.pageSize);
  }*/

  HabilitarProfesional(profesional){
    console.log(profesional);
    this.dataSvc.HabilitarProfesional(profesional);
    profesional.estado=0;
      
    
  }

  NuevoUsuario(){
    this.router.navigate(['/registro']);  
  }
}
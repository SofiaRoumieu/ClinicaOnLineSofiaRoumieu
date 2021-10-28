import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista-especialidades',
  templateUrl: './lista-especialidades.component.html',
  styleUrls: ['./lista-especialidades.component.css']
})
export class ListaEspecialidadesComponent implements OnInit {

  listado:any;
  col:string = "";
  dis:boolean = false;
  @Output() enventoEspecialidad = new EventEmitter<any>();

 
  constructor(private data:DataService) { }

  
  ngOnInit(): void {
    this.data.getEspecialidades().subscribe(res =>{
      
      this.listado = res; 
    })
  }
  
  tomarEspecialidad(especialidad:any)
  {
    this.enventoEspecialidad.emit(especialidad);
  }
  seleccionado(i:number){
    
    let id:string = i.toString();
   

     document.getElementById(id).style.backgroundColor='green';
     this.dis = true;
    
  }

}

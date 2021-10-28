import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista-profesionales',
  templateUrl: './lista-profesionales.component.html',
  styleUrls: ['./lista-profesionales.component.css']
})
export class ListaProfesionalesComponent implements OnInit {

  @Input() especialidad:string;
  @Input() listado:any;
  @Output() enventoProfesional = new EventEmitter<any>();
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    
  }

  seleccionarProfesional(dato:any)
  {  
    console.log("cuando hacemos clic en un profesional::");
    console.log(dato);
     this.enventoProfesional.emit(dato);
  }

}


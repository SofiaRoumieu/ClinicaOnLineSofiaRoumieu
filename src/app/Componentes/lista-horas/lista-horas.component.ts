import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista-horas',
  templateUrl: './lista-horas.component.html',
  styleUrls: ['./lista-horas.component.css']
})

export class ListaHorasComponent implements OnInit {

  @Input() especialidad:string;
  @Input() listado:any;
  @Output() enventoHorario = new EventEmitter<any>();
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    
  }

  seleccionarHorario(dato:any)
  {  
    console.log("cuando hacemos clic en una hora::");
    console.log(dato);
     this.enventoHorario.emit(dato);
  }

}



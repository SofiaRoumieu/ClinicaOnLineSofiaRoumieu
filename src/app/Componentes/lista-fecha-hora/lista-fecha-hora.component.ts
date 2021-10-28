import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista-fecha-hora',
  templateUrl: './lista-fecha-hora.component.html',
  styleUrls: ['./lista-fecha-hora.component.css']
})
export class ListaFechaHoraComponent implements OnInit {


  @Input() profesional:string;
  @Input() listado:any;
  @Output() enventoFecha = new EventEmitter<any>();
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    
  }

  seleccionarFecha(dato:any)
  {  
     this.enventoFecha.emit(dato);
  }

}

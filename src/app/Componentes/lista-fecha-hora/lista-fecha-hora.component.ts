import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { trigger, transition, style, animate, state} from '@angular/animations';


@Component({
  selector: 'app-lista-fecha-hora',
  templateUrl: './lista-fecha-hora.component.html',
  styleUrls: ['./lista-fecha-hora.component.css'],
  animations: [
    trigger('enterState', [
     state('void', style({
       transform: 'translateX(-100%)',
       opacity:0
     })), 
     transition(':enter',[
       animate(3000, style({
        transform:'translateX(0)',
         opacity:1
       }))
     ])
    ])]
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

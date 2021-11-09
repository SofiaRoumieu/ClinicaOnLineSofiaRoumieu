import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'app-lista-horas',
  templateUrl: './lista-horas.component.html',
  styleUrls: ['./lista-horas.component.css'],
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



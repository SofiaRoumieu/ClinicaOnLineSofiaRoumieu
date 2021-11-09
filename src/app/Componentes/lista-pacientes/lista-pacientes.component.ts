import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css'],
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
export class ListaPacientesComponent implements OnInit {

  //@Input() especialidad:string;
  @Input() listado:any;
  @Output() eventoPaciente = new EventEmitter<any>();
  
  constructor(private data:DataService) { }

  ngOnInit(): void {
    
  }

  seleccionarPaciente(dato:any)
  {  
     this.eventoPaciente.emit(dato);
  }

}


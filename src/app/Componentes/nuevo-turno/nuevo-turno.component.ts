import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';
import { Usuario } from 'src/app/clases/usuario';
import { Turno} from 'src/app/clases/turno';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nuevo-turno',
  templateUrl: './nuevo-turno.component.html',
  styleUrls: ['./nuevo-turno.component.css']
})
export class NuevoTurnoComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  horaFormGroup: FormGroup;
  turno:Turno = new Turno();
  profesionales:any;
  today = new Date();
  horas:Array<any> = [];
  usuario:any = new Usuario();
  hora:any;
  turnos:any = new Array<Turno>();
  turnosDisponibles:Array<any> = new Array<any>();
   

  constructor(private _formBuilder: FormBuilder,private data:DataService,private auth:AuthService) {}

  ngOnInit() {
    this.turnos =this.data.getTurnos();
    var uid="0";
    this.auth.getUserUid().then(res =>{
      uid = res.toString();
      this.data.getUserByUid(uid)
         .subscribe(res => {
           this.usuario = res;
         })
    }).catch(res =>{
     uid = res.toString();
     console.log("Sin Usuario");
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.horaFormGroup = this._formBuilder.group({
      horaCtrl: ['', Validators.required],
      fechaCtrl:['', Validators.required]
    });
  
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    let valid:boolean;

    this.turno.profesional.atencion.forEach(res =>{
       if(this.transformFech(res.dia) == day)
       {
          valid = true;

       }
    })
    // Prevent Saturday and Sunday from being selected.

    return valid && day !== 0;
  }

  Entrar(){  
    
    this.turno.paciente = this.usuario;

      this.auth.registerTurnos(this.turno).then(res=>{
        console.log("Guarda bien el turno");
        //this.toastr.success("Turno Guardado con Éxito");
      }).catch(error =>{
        console.log("Pincho el turno pa");
        console.info(error);
      })

    
     
  }
   
  get nombre() {​​ return this.firstFormGroup.get('firstCtrl'); }
  
  
  tomarEspecialidad(dato:any)
  { 
    const {​​ nombre }​​ = this.firstFormGroup.value;
    // nombre = dato.nombre 
     this.turno.especialidad = dato.nombre;
  }
  tomarProfesional(dato:any)
  {
    console.log("profesional seleccionado:::");
    console.log(dato);
    this.turno.profesional = dato;
    console.log(this.turno.profesional);
    this.turnosDisponibles = [];
    this.Fechas();
  }

  parserFecha(fecha:Date)
  {
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;
    let anio = fecha.getFullYear() ;
  //  let feche = dia + "-" + mes + "-" + anio;
  let feche;
  if(dia>9)
  {
     feche = anio + "-" + mes + "-" + dia;

  }
  else
  {
     feche = anio + "-" + mes + "-" + "0"+dia;

  }
    
    return feche;
   
  }

  cargarProfesionales(dato:string)
  { 
    this.data.getProfesionalesByEspecialidad(dato).then(res =>{
      if(res.length > 0)
      { 
        this.profesionales = res; 
      }console.log(res);
    });
  }

  transformFech(fecha:string)
  {  
    let dia;
    switch(fecha)
    {
        case "Lunes":
           dia = 1;
        break;
        case "Martes":
         dia = 2; 
        break;

        case "Miércoles":
          dia = 3; 
        break;

        case "Jueves":
          dia = 5; 
        break;

        case "Viernes":
          dia = 5; 
        break;

        case "Sábado":
          dia = 6; 
        break;
    } 

    return dia;

  }  

  tomarFechaHora(evento:any)
  { 
    this.turno.fecha = evento.fecha;
    this.turno.hora = evento.hora;
    console.log(this.turno.fecha);
  }

  ExisteTurno(fecha:string,hora:any,num:number,dia:string,mes:number)
  { 
     let turnosDisponibles = [];
     this.data.TurnoFecha(fecha,hora).then(res =>{
        turnosDisponibles = res;
        if(turnosDisponibles.length == 0)
        { 
          this.turnosDisponibles.push({fecha:fecha,hora:hora,numero:num,nombre:dia,mes:mes+1});
        }
          //console.info(this.turnosDisponibles);   
      })
    //this.turnosDisponibles =  
  }

  OrdenarLista()
  {
    for (let index = 0; index < this.turnosDisponibles.length; index++) {
      
      let element = this.turnosDisponibles[index].numero;
      let siguiente = this.turnosDisponibles[index+1].numero;
      let aux=0;
  
      if(element>siguiente)
      {
        aux = this.turnosDisponibles[index];
        this.turnosDisponibles[index] =  this.turnosDisponibles[index+1];
        this.turnosDisponibles[index+1] = this.turnosDisponibles[index];
      }
    }
  }

  Fechas()
  {
    let day = new Date();
    let turnosDisponibles = [];
    //let horas = [];

    this.turno.profesional.atencion.forEach(element => {
       
    let dia = this.transformFech(element.dia);
    let dif = day.getDay() - dia;
    
    let fecha:Date = new Date();
    
    if(dif > 0)
    { 
      fecha.setDate(fecha.getDate() - dif);
    }
    else
    {  
      if(dif<0)
      {
        fecha.setDate(fecha.getDate() - dif);
      }
      else
      {
        
      }
      
    }
    if(dif <1)
    {
      let fe  = this.parserFecha(fecha);
      this.ExisteTurno(fe,element.hora,fecha.getDate(),element.dia,fecha.getMonth());

    }
    let semana:Date = new Date();
     
   for (let i = 1; i < 4; i++) {
     semana.setDate(fecha.getDate()+7*i);
     let sem = this.parserFecha(semana)
     this.ExisteTurno(sem,element.hora,semana.getDate(),element.dia,semana.getMonth());
     
   }
   // turnosDisponibles.push({fecha:fecha,hora:element.hora});
    
   // console.info(turnosDisponibles);

    });
  }

 

  cargarHora()
  {
    
    this.horas = [];
    
    let date = new Date(this.turno.fecha);
    let dia="";
    let dias=[];
    console.info();
    switch(date.getDay())
    {
      case 1:
        dia = "Lunes";
        break;
      case 2:
         dia = "Martes";
        break;
      case 3:
        dia = "Miércoles";

        break;
      case 4:
        dia = "Jueves";
        
        break;
      case 5:
        dia = "Viernes";

        break;
      case 6:
        dia = "Sábado";
        
        break;
      case 6:
        dia = "Domingo";

        break;
    }
   // this.horas = this.turno.profesional.atencion.map(function(x){return x.hora});
   console.log(dia);
    dias = this.turno.profesional.atencion.filter(function(x){return x.dia == dia})
    if(dias.length>0)
    {
       this.horas = dias.map(function(x){return x.hora});
       console.info(this.horas);
    }
    else
    {
      //this.toastr.warning("El profesional no atiende el dia de la semana indicado");
    }
  }
     
  
}

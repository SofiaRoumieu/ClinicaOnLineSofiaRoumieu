import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Ingreso} from 'src/app/clases/ingreso';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  listado:any= new Array<any>();

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getIngresos().then(res =>{
      console.log(res);
      if(res.length > 0)
      { 
        this.listado = res; 
      }
    });
  }

  DescargarXLS(){}
}

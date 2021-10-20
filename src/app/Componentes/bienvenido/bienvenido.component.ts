import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public nombre ;
  public foto;
  public url;
  public seguidores;
  public repositorios;
  public seguidos;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let name: string;
    let bandera: string;
    this.apiService.ObtenerGit().subscribe((misDatos: any) => {
      this.nombre=misDatos.login;
      this.foto= misDatos.avatar_url;
      this.url=misDatos.url;
      this.seguidores=misDatos.followers;
      this.seguidos=misDatos.following;
      this.repositorios=misDatos.public_repos;
      console.log(this.nombre + ', '+this.foto+', '+this.seguidores );
    }, error=>{console.log(error);})
  }

}

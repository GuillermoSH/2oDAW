import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Mock } from 'src/app/mock/mock.mock';
import { Pelicula } from 'src/app/model/pelicula.model';
import { DetallesPeliculasService } from 'src/app/services/detalles-peliculas.service';

@Component({
  selector: 'app-editar-peliculas',
  templateUrl: './editar-peliculas.component.html',
  styleUrls: ['./editar-peliculas.component.css']
})
export class EditarPeliculasComponent {
  detallesPelicula: any = null;
  private peliculaService: DetallesPeliculasService;

  constructor(private peliculasService: DetallesPeliculasService, private router: Router) {
    this.peliculaService = peliculasService;
  }

  private formatDate(date: string): string {
    let dia = date.split("-")[2];
    let mes = date.split("-")[1];
    let anio = date.split("-")[0];
    
    return dia + "/" + mes + "/" + anio;
  }

  modificarPeliculaMock() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let poster = (<HTMLInputElement>document.getElementById("poster")).value;
    let releaseDate = this.formatDate((<HTMLInputElement>document.getElementById("releaseDate")).value);
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    Mock[Number(this.detallesPelicula.id) - 1] = new Pelicula(this.detallesPelicula.id, name, poster, releaseDate, description);
    this.router.navigate(['/' + this.detallesPelicula.id]);
  }

  modificarPeliculaApi() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let poster = (<HTMLInputElement>document.getElementById("poster")).value;
    let releaseDate = (<HTMLInputElement>document.getElementById("releaseDate")).value;
    let description = (<HTMLInputElement>document.getElementById("description")).value;

  }

  ngOnInit() {
    this.detallesPelicula = this.peliculasService.getDetallesStorage(this.router.url.split("/")[2]);
    //this.detallesPelicula = this.peliculasService.getDetallesMock(this.router.url.split("/")[2]);
  }
}

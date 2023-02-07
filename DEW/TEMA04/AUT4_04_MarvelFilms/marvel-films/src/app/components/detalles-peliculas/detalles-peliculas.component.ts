import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula.model';
import { TextTransformPipe } from 'src/app/pipes/text-transform.pipe';
import { Mock } from 'src/app/mock/mock.mock';
import { Route, Router } from '@angular/router';
import { DetallesPeliculasService } from 'src/app/services/detalles-peliculas.service';
@Component({
  selector: 'app-detalles-peliculas',
  templateUrl: './detalles-peliculas.component.html',
  styleUrls: ['./detalles-peliculas.component.css']
})
export class DetallesPeliculasComponent implements OnInit {
  detallesPelicula: any = null;
  private peliculaService: DetallesPeliculasService;

  constructor(private peliculasService: DetallesPeliculasService, private router: Router) {
    this.peliculaService = peliculasService;
  }

  eliminarPeliculaMock() {
    Mock.splice(this.detallesPelicula.id -1);
    alert("Se ha borrado correctamente");
    this.router.navigate(['']);
  }

  eliminarPeliculaApi() {
    let listaPelis = localStorage.getItem("listaPelis");
    if (listaPelis != null) {
      let jsonListaPelis: Pelicula[] = JSON.parse(listaPelis);
      jsonListaPelis.splice(jsonListaPelis.indexOf(this.detallesPelicula));
      localStorage.setItem("listaPelis", JSON.stringify(jsonListaPelis));
      alert("Se ha borrado correctamente");
      this.router.navigate(['']);
    }
  }

  expandirTexto() {
    let sinopsis = (<HTMLElement>document.getElementById("sinopsis"));
    sinopsis.innerHTML = "<strong style='color: #f0131f; text-transform: uppercase;'>Sinopsis: </strong>" + this.detallesPelicula.description;
  }

  ngOnInit() {
    this.peliculasService.getDetallesApi(this.router.url.replace("/","")).subscribe((peliculasAPI: Pelicula) => this.detallesPelicula = peliculasAPI);
    //this.detallesPelicula = this.peliculasService.getDetallesMock(this.router.url.replace("/",""));
  }
}
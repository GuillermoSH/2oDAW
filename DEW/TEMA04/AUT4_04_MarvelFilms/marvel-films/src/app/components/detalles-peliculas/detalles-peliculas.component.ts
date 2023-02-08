import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula.model';
import { TextTransformPipe } from 'src/app/pipes/text-transform.pipe';
import { Mock } from 'src/app/mock/mock.mock';
import { Route, Router } from '@angular/router';
import { DetallesPeliculasService } from 'src/app/services/detalles-peliculas.service';
import { ApiPeliculasService } from 'src/app/services/api-peliculas.service';
@Component({
  selector: 'app-detalles-peliculas',
  templateUrl: './detalles-peliculas.component.html',
  styleUrls: ['./detalles-peliculas.component.css']
})
export class DetallesPeliculasComponent implements OnInit {
  detallesPelicula: any = null;

  constructor(private detallesService: DetallesPeliculasService, private peliculasService: ApiPeliculasService, private router: Router) { }

  eliminarPeliculaMock() {
    Mock.splice(this.detallesPelicula.id - 1);
    alert("Se ha borrado correctamente");
    this.router.navigate(['']);
  }

  eliminarPeliculaApi() {
    let listaPelis = localStorage.getItem("listaPelis");
    if (listaPelis != null) {
      let jsonListaPelis: Pelicula[] = JSON.parse(listaPelis);
      for (let i = 0; i < jsonListaPelis.length; i++) {
        if (jsonListaPelis[i].id == this.detallesPelicula.id) {
          jsonListaPelis.splice(i, 1);
        }
      }
      localStorage.setItem("listaPelis", JSON.stringify(jsonListaPelis));
      alert("Se ha borrado correctamente");
      this.router.navigate(['']);
    }
  }

  setDetallesPeli(jsonListaPelis: Pelicula[], id: number, pelicula: Pelicula) {
    jsonListaPelis[id - 1] = pelicula;
    console.log(pelicula)

    this.detallesPelicula = jsonListaPelis[id - 1];
    
    localStorage.setItem("listaPelis", JSON.stringify(jsonListaPelis));
  }

  expandirTexto() {
    let sinopsis = (<HTMLElement>document.getElementById("sinopsis"));
    sinopsis.innerHTML = "<strong style='color: #f0131f; text-transform: uppercase;'>Sinopsis: </strong>" + this.detallesPelicula.description;
  }

  ngOnInit() {
    let listaPelis = localStorage.getItem("listaPelis");
    let idPeli = Number(this.router.url.replace("/", ""));

    if (listaPelis != null) {
      let jsonListaPelis: Pelicula[] = JSON.parse(listaPelis);

      if (jsonListaPelis[idPeli - 1].releaseDate == null || jsonListaPelis[idPeli - 1].description == null) {
        this.detallesService.getDetallesApi(idPeli + "").subscribe(pelicula => this.setDetallesPeli(jsonListaPelis, idPeli, pelicula));
      } else {
        this.detallesPelicula = this.detallesService.getDetallesStorage(idPeli + "");
      }
    }
    // this.detallesPelicula = this.detallesService.getDetallesStorage(this.router.url.replace("/", ""));
    // this.detallesPelicula = this.peliculasService.getDetallesMock(this.router.url.replace("/",""));
  }
}
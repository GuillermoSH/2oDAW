import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula.model';
import { Mock } from 'src/app/mock/mock.mock';
import { Router } from '@angular/router';
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

  /**
   * Elimina la película de la lista de películas del Mock.
   */
  eliminarPeliculaMock() {
    Mock.splice(this.detallesPelicula.id - 1);
    alert("Se ha borrado correctamente");
    this.router.navigate(['']);
  }

  /**
   * Obtiene la lista de películas del almacenamiento local, las recorre y, si la identificación de la
   * película coincide con la identificación de la película que estamos viendo, la elimina de la lista.
   */
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

  /**
   * Toma una matriz JSON de películas, una ID y una película, y luego configura la película en la
   * matriz JSON con la ID dada para la película dada.
   * 
   * @param {Pelicula[]} jsonListaPelis - Pelicula[] es el conjunto de películas que obtenemos del
   * localStorage.
   * @param {number} id - número, película: película
   * @param {Pelicula} pelicula - Pelicula es el objeto que contiene los nuevos datos que ha ingresado
   * el usuario.
   */
  setDetallesPeli(jsonListaPelis: Pelicula[], id: number, pelicula: Pelicula) {
    jsonListaPelis[id - 1] = pelicula;
    console.log(pelicula)

    this.detallesPelicula = jsonListaPelis[id - 1];
    
    localStorage.setItem("listaPelis", JSON.stringify(jsonListaPelis));
  }

  /**
   * Toma el elemento con el id "sinopsis" y cambia su HTML interno a la descripción de la película
   * para mostrar la sinopsis completa de esta.
   */
  expandirTexto() {
    let sinopsis = (<HTMLElement>document.getElementById("sinopsis"));
    sinopsis.innerHTML = "<strong style='color: #f0131f; text-transform: uppercase;'>Sinopsis: </strong>" + this.detallesPelicula.description;
  }

  /**
   * Obtiene la lista de películas del almacenamiento local, obtiene la identificación de la película
   * de la URL, verifica si la película tiene una fecha de lanzamiento y una descripción, si no la
   * tiene, llama a la función getDetallesApi de DetallesService, si la tiene, llama a la función
   * getDetallesStorage del DetallesService.
   */
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
  }
  
  /**
   * La función obtiene los detalles de la película del servicio a partir del Mock y los asigna a la 
   * variable detallesPelicula.
   *
  ngOnInit() {
    this.detallesPelicula = this.detallesService.getDetallesMock(this.router.url.replace("/",""));
  }
  */
}
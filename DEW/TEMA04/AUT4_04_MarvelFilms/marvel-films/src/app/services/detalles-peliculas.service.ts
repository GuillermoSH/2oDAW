import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../model/pelicula.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mock } from '../mock/mock.mock';

@Injectable({
  providedIn: 'root'
})
export class DetallesPeliculasService {
  constructor(private http: HttpClient) { }

  /**
   * Devuelve los detalles de la película de la película con la identificación pasada en el parámetro.
   * @param {string} id - de la pelicula
   * @returns el objeto que está en el arreglo Mock, en la posición que se le pasa como parámetro.
   */
  getDetallesMock(id : string): Pelicula {
    return Mock[Number(id) - 1];
  }

  /**
   * Devuelve un Observable de tipo Pelicula
   * @param {string} id - de la pelicula
   * @returns Un Observable de tipo Pelicula.
   */
  getDetallesApi(id : string): Observable<Pelicula> {
    return this.http.get<Pelicula>('https://www.qando.es/docs/films.php?id='+id)
  }

  /**
   * Devuelve los detalles de la película de la película con la identificación pasada en el parámetro.
   * @param {string} id - de la pelicula
   * @returns el objeto que está en el localStorage, con el id que se le pasa como parámetro.
   */
  getDetallesStorage(id: string): any {
    let listaPelis = localStorage.getItem("listaPelis");

    if (listaPelis != null) {
      let jsonListaPelis: Pelicula[] = JSON.parse(listaPelis);
      
      for (const pelicula of jsonListaPelis) {
        if (pelicula.id == Number(id)) {
          return pelicula;
        }
      }
    }
  }
}

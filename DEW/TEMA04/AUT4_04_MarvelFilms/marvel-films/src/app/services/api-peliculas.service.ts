import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../model/pelicula.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mock } from '../mock/mock.mock';
import { DetallesPeliculasService } from './detalles-peliculas.service';

@Injectable({
  providedIn: 'root'
})

export class ApiPeliculasService {
  listaPelis: Pelicula[] = [];
  peliculas: Pelicula[] = [];
  constructor(private http: HttpClient, private detallesService: DetallesPeliculasService) { }

  /**
   * Toma una matriz de objetos de Pelicula del Mock y devuelve una matriz de objetos de 
   * Pelicula.
   * @returns Una matriz de objetos de Pelicula.
   */
  getPeliculasMock(): Pelicula[] {
    let peliculas: Pelicula[] = [];
    Mock.forEach(pelicula => {
      peliculas.push(pelicula);
    });

    return peliculas;
  }

  /**
   * Esta función devuelve un Observable de tipo Pelicula[]
   * @returns Un Observable de Pelicula[]
   */
  getPeliculasApi(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>('https://www.qando.es/docs/films.php');
  }

  /**
   * Toma una matriz de objetos de Pelicula del storage y devuelve una matriz de objetos de 
   * Pelicula.
   * @returns Una matriz de objetos de Pelicula o undefined si el localStorage está vacío.
   */
  getPeliculasStorage(): Pelicula[] | undefined {
    let listaPelis = localStorage.getItem("listaPelis");
    if (listaPelis != null) {
      return JSON.parse(listaPelis);
    } else {
      return undefined;
    }
  }
}

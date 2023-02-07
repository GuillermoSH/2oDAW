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
  pelis: Pelicula[] = [];
  constructor(private http: HttpClient, private detallesService: DetallesPeliculasService) { }

  getPeliculasMock(): any {
    let peliculas: Pelicula[] = [];
    Mock.forEach(pelicula => {
      peliculas.push(pelicula);
    });

    return peliculas;
  }

  getPeliculasApi(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>('https://www.qando.es/docs/films.php');
  }
}

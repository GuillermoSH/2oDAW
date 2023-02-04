import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../model/pelicula.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mock } from '../mock/mock.mock';


@Injectable({
  providedIn: 'root'
})

export class ApiPeliculasService {
  constructor(private http: HttpClient) { }

  getPeliculasMock(): any {
    let peliculas: Pelicula[] = [];
    Mock.forEach(pelicula => {
      peliculas.push(pelicula);
    });

    return peliculas;
  }

  getDetallesMock(id : number): Pelicula{
    return Mock[id - 1];
  }

  getPeliculasApi(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>('https://www.qando.es/docs/films.php');
  }

  getDetallesApi(id : number): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>('https://www.qando.es/docs/films.php?id='+id)
  }
}

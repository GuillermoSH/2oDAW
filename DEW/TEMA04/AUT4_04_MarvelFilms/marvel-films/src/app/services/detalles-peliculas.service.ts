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

  getDetallesMock(id : string): Pelicula {
    return Mock[Number(id) - 1];
  }

  getDetallesApi(id : string): Observable<Pelicula> {
    return this.http.get<Pelicula>('https://www.qando.es/docs/films.php?id='+id)
  }
}

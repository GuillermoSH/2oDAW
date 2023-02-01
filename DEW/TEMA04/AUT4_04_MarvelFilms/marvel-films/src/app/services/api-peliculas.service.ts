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
  private peliculas: Pelicula[] = [];
  constructor(private http: HttpClient, private mock: Mock) { }

  getPeliculas(): any {
    if (this.mock.getMock().length != 0) {
      for (let id = 1; id <= 9; id++) {
        this.http.get<Pelicula>('https://www.qando.es/docs/films.php?id=' + id).subscribe(
          (pelicula: Pelicula) => this.peliculas.push(pelicula)
        )
        this.mock.setMock(this.peliculas);
      }
    } else {
      this.peliculas = this.mock.getMock();
    }
    return this.peliculas;
  }
}

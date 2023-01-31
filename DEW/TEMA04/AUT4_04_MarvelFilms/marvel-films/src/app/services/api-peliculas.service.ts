import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pelicula} from '../modelo/pelicula.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {
  constructor(private http: HttpClient) { }

  
}

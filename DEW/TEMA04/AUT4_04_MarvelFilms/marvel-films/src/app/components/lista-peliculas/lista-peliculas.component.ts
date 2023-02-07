import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../model/pelicula.model';
import { ApiPeliculasService } from '../../services/api-peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})

export class ListaPeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: ApiPeliculasService) { }

  getListaPelis() {
    let listaPelis = localStorage.getItem("listaPelis");
    if (listaPelis != null) {
      this.peliculas = JSON.parse(listaPelis);
    } else {
      this.peliculasService.getPeliculasApi().subscribe(peliculas => this.inicializarStorage(peliculas));
    }
  }

  inicializarStorage(peliculas: Pelicula[]) {
    localStorage.setItem("listaPelis", JSON.stringify(peliculas));
    this.peliculas = peliculas;
  }

  ngOnInit() {
    //this.peliculas = this.peliculasService.getPeliculasMock();
    this.getListaPelis();
  }
}

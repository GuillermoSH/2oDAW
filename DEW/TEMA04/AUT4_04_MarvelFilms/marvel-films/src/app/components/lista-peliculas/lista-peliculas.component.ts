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

  ngOnInit() {
    this.peliculas = this.peliculasService.getPeliculasMock();
    // this.peliculas = this.peliculasService.getPeliculasApi();
    this.peliculas.sort(pelicula => pelicula.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/model/pelicula.model';
import { TextTransformPipe } from 'src/app/pipes/text-transform.pipe';
import { Mock } from 'src/app/mock/mock.mock';
import { Route, Router } from '@angular/router';
import { DetallesPeliculasService } from 'src/app/services/detalles-peliculas.service';
@Component({
  selector: 'app-detalles-peliculas',
  templateUrl: './detalles-peliculas.component.html',
  styleUrls: ['./detalles-peliculas.component.css']
})
export class DetallesPeliculasComponent implements OnInit {
  detallesPelicula: any = null;
  private peliculaService: DetallesPeliculasService;

  constructor(private peliculasService: DetallesPeliculasService, private router: Router) {
    this.peliculaService = peliculasService;
  }

  ngOnInit() {
    this.peliculasService.getDetallesApi(this.router.url.replace("/","")).subscribe((peliculasAPI: Pelicula) => this.detallesPelicula = peliculasAPI);
  }
}
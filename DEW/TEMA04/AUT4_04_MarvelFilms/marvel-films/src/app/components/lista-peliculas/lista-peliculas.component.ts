import { Component, OnInit } from '@angular/core';
import { DetallesPeliculasService } from 'src/app/services/detalles-peliculas.service';
import { Pelicula } from '../../model/pelicula.model';
import { ApiPeliculasService } from '../../services/api-peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})

export class ListaPeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: ApiPeliculasService, private detallesService: DetallesPeliculasService) { }

  /**
   * Si hay una lista de películas en el almacenamiento local, la obtenemos y la analizamos en un
   * objeto JSON. Si no la hay, obtenemos la lista de películas de la API y la guardamos en el
   * almacenamiento local.
   */
  getListaPelis() {
    let listaPelis = this.peliculasService.getPeliculasStorage();
    if (listaPelis != undefined) {
      this.peliculas = listaPelis;
    } else {
      this.peliculasService.getPeliculasApi().subscribe(peliculas => this.inicializarStorage(peliculas));
    }
  }

  /**
   * Toma una matriz de objetos de Pelicula, la convierte en una cadena y la almacena en localStorage.
   * 
   * @param {Pelicula[]} peliculas - Película[]
   */
  inicializarStorage(peliculas: Pelicula[]) {
    localStorage.setItem("listaPelis", JSON.stringify(peliculas));
    this.peliculas = peliculas;
  }

  /**
   * Estamos llamando a la función getListaPelis() del archivo peliculasService.ts, que es una función
   * que devuelve un observable. Luego nos suscribimos a ese observable y asignamos los datos que
   * obtenemos a la variable peliculas.
   */
  ngOnInit() {
    this.getListaPelis();
  }
  
  
  /**
   * Estamos llamando a getPeliculasMock() para inicializar la lista de peliculas y poder asignarl a la
   * variable peliculas.
   *
  ngOnInit() {
    this.peliculas = this.peliculasService.getPeliculasMock();
  }*/
}

import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Mock } from 'src/app/mock/mock.mock';
import { Pelicula } from 'src/app/model/pelicula.model';
import { DetallesPeliculasService } from 'src/app/services/detalles-peliculas.service';

@Component({
  selector: 'app-editar-peliculas',
  templateUrl: './editar-peliculas.component.html',
  styleUrls: ['./editar-peliculas.component.css']
})
export class EditarPeliculasComponent {
  detallesPelicula: any = null;
  private peliculaService: DetallesPeliculasService;

  constructor(private peliculasService: DetallesPeliculasService, private router: Router) {
    this.peliculaService = peliculasService;
  }
  
  /**
   * Toma una fecha en el formato AAAA-MM-DD y la devuelve en el formato DD/MM/AAAA.
   * @param {string} date - La fecha a formatear.
   * @returns La fecha en el formato dd/mm/aaaa.
   */
  private formatDate(date: string): string {
    let dia = date.split("-")[2];
    let mes = date.split("-")[1];
    let anio = date.split("-")[0];
    
    return dia + "/" + mes + "/" + anio;
  }

  /**
   * Toma los valores de las entradas y crea un nuevo objeto Pelicula con ellos, luego reemplaza el
   * antiguo objeto Pelicula en la matriz Mock con el nuevo.
   */
  modificarPeliculaMock() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let poster = (<HTMLInputElement>document.getElementById("poster")).value;
    let releaseDate = this.formatDate((<HTMLInputElement>document.getElementById("releaseDate")).value);
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    Mock[Number(this.detallesPelicula.id) - 1] = new Pelicula(this.detallesPelicula.id, name, poster, releaseDate, description);
    this.router.navigate(['/' + this.detallesPelicula.id]);
  }

  /**
   * Toma los valores de las entradas y crea un nuevo objeto Pelicula con ellos, luego reemplaza el
   * antiguo objeto Pelicula en el localStorage con el nuevo.
   */
  modificarPeliculaApi() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let poster = (<HTMLInputElement>document.getElementById("poster")).value;
    let releaseDate = this.formatDate((<HTMLInputElement>document.getElementById("releaseDate")).value);
    let description = (<HTMLInputElement>document.getElementById("description")).value;

    let listaPelis = localStorage.getItem("listaPelis");
    if (listaPelis != null) {
      let jsonListaPelis: Pelicula[] = JSON.parse(listaPelis);
      for (let i = 0; i < jsonListaPelis.length; i++) {
        if (jsonListaPelis[i].id == this.detallesPelicula.id) {
          jsonListaPelis[i] = new Pelicula(i + 1, name, poster, releaseDate, description);
        }
      }
      localStorage.setItem("listaPelis", JSON.stringify(jsonListaPelis));
      alert("Se ha borrado correctamente");
      this.router.navigate(['']);
    }

    this.router.navigate(['/' + this.detallesPelicula.id]);
  }

  /**
   * Usamos el enrutador angular para obtener la URL de la página actual, la dividimos en una matriz de
   * cadenas y luego usamos el segundo elemento de esa matriz para obtener la ID de la película que
   * queremos mostrar a partir del localStorage.
   */
  ngOnInit() {
    this.detallesPelicula = this.peliculasService.getDetallesStorage(this.router.url.split("/")[2]);
  }
  
  /**
   * Usamos el enrutador angular para obtener la URL de la página actual, la dividimos en una matriz de
   * cadenas y luego usamos el segundo elemento de esa matriz para obtener la ID de la película que
   * queremos mostrar a partir del Mock.
   *
  ngOnInit() {
    this.detallesPelicula = this.peliculasService.getDetallesMock(this.router.url.split("/")[2]);
  }
  */
}

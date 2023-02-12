import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mock } from 'src/app/mock/mock.mock';
import { Pelicula } from 'src/app/model/pelicula.model';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {

  constructor(private router: Router) { }

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
   * Toma los valores del formulario y los inserta en el mock
   */
  registrarPeliculaMock() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let poster = (<HTMLInputElement>document.getElementById("poster")).value;
    let releaseDate = this.formatDate((<HTMLInputElement>document.getElementById("releaseDate")).value);
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    let id = Mock[Mock.length + 1].id + 1;

    Mock.push(new Pelicula(id, name, poster, releaseDate, description));
    this.router.navigate(['']);
  }

  /**
   * Toma los valores del formulario y crea un nuevo objeto Pelicula, luego lo inserta en la matriz
   * listaPelis y lo guarda en localStorage.
   */
  registrarPeliculaStorage() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let poster = (<HTMLInputElement>document.getElementById("poster")).value;
    let releaseDate = this.formatDate((<HTMLInputElement>document.getElementById("releaseDate")).value);
    let description = (<HTMLInputElement>document.getElementById("description")).value;

    let listaPelis = localStorage.getItem("listaPelis");

    if (listaPelis != null) {
      let jsonListaPelis = JSON.parse(listaPelis);
      let id = jsonListaPelis[jsonListaPelis.length - 1].id + 1;
      jsonListaPelis.push(new Pelicula(id, name, poster, releaseDate, description));
      localStorage.setItem("listaPelis", JSON.stringify(jsonListaPelis));
      this.router.navigate(['']);
    }
  }
}

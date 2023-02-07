import { Component, destroyPlatform } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Mock } from 'src/app/mock/mock.mock';
import { Pelicula } from 'src/app/model/pelicula.model';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {
  newFilmBtn: any = document.getElementById("btnNewFilm");

  constructor(private router: Router) {}

  registrarPeliculaMock() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let poster = (<HTMLInputElement>document.getElementById("poster")).value;
    let releaseDate = (<HTMLInputElement>document.getElementById("releaseDate")).value;
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    let id = Mock.length + 1;

    Mock.push(new Pelicula(id, name, poster, releaseDate, description));
    alert("Se ha registrado correctamente.")
    this.router.navigate(['']);
  }

  registrarPeliculaApi() {

  }
}

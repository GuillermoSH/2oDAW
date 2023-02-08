import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { DetallesPeliculasComponent } from './components/detalles-peliculas/detalles-peliculas.component';
import { EditarPeliculasComponent } from './components/editar-peliculas/editar-peliculas.component';
import { InfoMarvelComponent } from './components/info-marvel/info-marvel.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  { path: "", component: ListaPeliculasComponent },
  { path: "new-film", component: CrearPeliculaComponent },
  { path: "marvel-info", component: InfoMarvelComponent },
  { path: "modify/:id", component: EditarPeliculasComponent },
  { path: ":id", component: DetallesPeliculasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

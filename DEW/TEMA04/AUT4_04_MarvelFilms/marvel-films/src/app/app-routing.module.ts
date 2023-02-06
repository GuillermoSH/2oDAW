import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPeliculasComponent } from './components/detalles-peliculas/detalles-peliculas.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  { path: "", component: ListaPeliculasComponent },
  { path: ":id", component: DetallesPeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

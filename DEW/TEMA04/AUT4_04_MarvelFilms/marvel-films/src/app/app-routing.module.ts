import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  { path: "", component: ListaPeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

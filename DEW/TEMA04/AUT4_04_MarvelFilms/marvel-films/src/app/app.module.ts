import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextTransformPipe } from './pipes/text-transform.pipe';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DetallesPeliculasComponent } from './components/detalles-peliculas/detalles-peliculas.component';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { EditarPeliculasComponent } from './components/editar-peliculas/editar-peliculas.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { InfoMarvelComponent } from './components/info-marvel/info-marvel.component';
import { PhaseCalculatorDirective } from './directives/phase-calculator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextTransformPipe,
    ListaPeliculasComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    DetallesPeliculasComponent,
    ShortenTextPipe,
    CrearPeliculaComponent,
    EditarPeliculasComponent,
    FormatDatePipe,
    InfoMarvelComponent,
    PhaseCalculatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

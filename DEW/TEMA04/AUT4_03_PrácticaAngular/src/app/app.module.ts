import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderFrutasComponent } from './header-frutas/header-frutas.component';
import { MainFrutasComponent } from './main-frutas/main-frutas.component';
import { FooterFrutasComponent } from './footer-frutas/footer-frutas.component';
import { CardFrutasComponent } from './card-frutas/card-frutas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFrutasComponent,
    MainFrutasComponent,
    FooterFrutasComponent,
    CardFrutasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

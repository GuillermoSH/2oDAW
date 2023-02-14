import { Component } from '@angular/core';
import { Character } from 'src/app/model/character.model';
import { Router } from '@angular/router';
import { CharactersDetailsService } from 'src/app/services/characters-details.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  characterDetails: any = null;

  constructor (private characterDetailsService: CharactersDetailsService, private router: Router) {}

  /**
   * Usamos el enrutador para obtener la identificación del carácter que queremos mostrar, luego usamos
   * esa identificación para llamar a la función getDetailsApi en characterDetailsService, que devuelve
   * un observable del carácter que queremos mostrar.
   */
  ngOnInit() {
    this.characterDetailsService.getDetailsApi(Number(this.router.url.replace("/", ""))).subscribe(character => this.characterDetails = character);
  }
  
  /**
   * Usamos el enrutador para obtener la URL actual, luego usamos characterDetailsService para obtener
   * los detalles del personaje cuya ID coincide con el número en la URL
   *
  ngOnInit() {
    this.characterDetails = this.characterDetailsService.getDetailsMock(Number(this.router.url.replace("/","")));
  }*/
}

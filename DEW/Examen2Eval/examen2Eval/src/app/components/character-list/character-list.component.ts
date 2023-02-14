import { Component } from '@angular/core';
import { Character } from 'src/app/model/character.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CharactersListService } from 'src/app/services/characters-list.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  characters: Character[] = [];

  constructor (private charactersListService: CharactersListService) {}

  /**
   * La función ngOnInit() es un enlace de ciclo de vida que se llama después de que se ha inicializado
   * el componente y se inicializará la variable characters a partir de la API
   */
  ngOnInit() {
    this.charactersListService.getCharactersApi().subscribe(characters => this.characters = characters.results);
  }
  
  /**
   * La función ngOnInit() es un enlace de ciclo de vida que se llama después de que se ha inicializado
   * el componente y se inicializará la variable characters a partir del Mock
   *
  ngOnInit() {
    this.characters = this.charactersListService.getCharactersMock();
  }*/
}

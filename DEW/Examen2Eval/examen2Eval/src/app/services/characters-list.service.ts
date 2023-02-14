import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersMock } from '../mock/characters-mock.mock';
import { Character } from '../model/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersListService {
  lista: Character[] = [];
  constructor(private http: HttpClient) { }

  /**
   * Estamos creando una nueva matriz de caracteres, recorriendo la matriz CharactersMock e insertando
   * cada carácter en la nueva matriz.
   * @returns Una matriz de personajes
   */
  getCharactersMock(): Character[] {
    let characters: Character[] = [];
    CharactersMock.forEach(character => {
      characters.push(character);
    });

    return characters;
  }

  /**
   * Estamos utilizando HttpClient para realizar una solicitud GET a la API de Rick and Morty, y
   * devolvemos la respuesta como un Observable
   * @returns Observable<cualquiera>
   */
  getCharactersApi(): Observable<any> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character');
  }
}

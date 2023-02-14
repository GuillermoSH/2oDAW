import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';
import { CharactersMock } from '../mock/characters-mock.mock';

@Injectable({
  providedIn: 'root'
})
export class CharactersDetailsService {

  constructor(private http: HttpClient) { }

  /**
   * Recorre la matriz de caracteres y devuelve el carácter con la identificación correspondiente
   * @param {number} id - número: la identificación del personaje del que queremos obtener los
   * detalles.
   * @returns Un objeto con los detalles del personaje con la identificación que se pasó.
   */
  getDetailsMock(id: number): Character {
    let characterDetails: any;
    CharactersMock.forEach(character => {
      if (character.id == id) {
        characterDetails = character;
      }
    });

    return characterDetails;
  }

  /**
   * Esta función toma una identificación de tipo número y devuelve un Observable de tipo Carácter
   * @param {number} id - número: la identificación del personaje del que desea obtener detalles.
   * @returns Observable<Carácter>
   */
  getDetailsApi(id: number): Observable<Character> {
    return this.http.get<Character>('https://rickandmortyapi.com/api/character/'+id);
  }
}

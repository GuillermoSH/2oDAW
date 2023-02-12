import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {
  /**
   * La función toma una cadena como argumento y, si la cadena tiene más de 300 caracteres, devuelve
   * los primeros 299 caracteres de la cadena, seguidos de puntos suspensivos.
   * @param {string} description - string - La descripción del evento.
   * @returns Una cuerda
   */
  transform(description: string): string {
    if (description.length > 300) {
      description = description.substring(0, 299) + "...";
    }
    return description;
  }
}

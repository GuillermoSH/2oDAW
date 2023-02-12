import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  /**
   * Si el nombre contiene dos puntos, divida el nombre en dos partes, la primera parte es el nombre,
   * la segunda parte es el tipo y luego devuelve el nombre y el tipo entre paréntesis.
   * @param {string} name - El nombre del elemento que se va a transformar.
   * @returns El nombre del artículo.
   */
  transform(name: string): string {
    let modName: string = name;
    if (modName.includes(":")) {
      name = modName.split(":")[0] + " (" + modName.split(":")[1].replaceAll(" ", "") + ")";
    }
    return name;
  }
}

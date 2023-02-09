import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform {
  /**
   * Toma una cadena en el formato "dd/mm/yyyy" y devuelve una cadena en el formato "yyyy-mm-dd"
   * 
   * @param {string} date - cadena: la fecha que se va a transformar.
   * @returns La fecha en el formato AAAA-MM-DD
   */
  transform(date: string): string {
    let dia = date.split("/")[0];
    let mes = date.split("/")[1];
    let anio = date.split("/")[2];
    
    return [anio, mes, dia].join("-");
  }
}

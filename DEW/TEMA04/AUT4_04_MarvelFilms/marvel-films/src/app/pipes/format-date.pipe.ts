import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(date: string): string {
    let dia = date.split("/")[0];
    let mes = date.split("/")[1];
    let anio = date.split("/")[2];
    
    return [anio, mes, dia].join("-");
  }
}

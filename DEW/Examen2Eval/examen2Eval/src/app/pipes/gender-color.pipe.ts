import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderColor'
})
export class GenderColorPipe implements PipeTransform {

  /**
   * Si el género es masculino, la etiqueta de género será azul; de lo contrario, será rosa.
   * @param {string} gender - cadena: este es el parámetro que estamos pasando.
   */
  transform(gender: string) {
    let genderTag = <HTMLElement>document.getElementById("gender");

    if (gender == "Male") {
      genderTag.innerHTML += "<span id='genderSpan' style='color: #2192FF'>"+gender+"</span>";
    } else {
      genderTag.innerHTML += "<span id='genderSpan' style='color: #FFCEFE'>"+gender+"</span>";
    }
  }
}

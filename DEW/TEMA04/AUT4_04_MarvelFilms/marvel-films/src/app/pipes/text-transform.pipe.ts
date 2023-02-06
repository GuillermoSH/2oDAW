import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {
  transform(name: string): string {
    let modName: string = name;
    if (modName.includes(":")) {
      name = modName.split(":")[0] + " (" + modName.split(":")[1].replaceAll(" ", "") + ")";
    }
    return name;
  }
}

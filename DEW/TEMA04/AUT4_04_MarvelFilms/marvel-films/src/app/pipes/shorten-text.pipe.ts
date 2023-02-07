import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {
  transform(description: string): string {
    if (description.length > 300) {
      description = description.substring(0, 299) + "...";
    }

    return description;
  }
}

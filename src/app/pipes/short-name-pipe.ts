import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
  standalone: true
})
export class ShortNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const words = value.trim().toLowerCase().split(' ');

    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }

    const firstName = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    const lastInitial = words[1].charAt(0).toUpperCase() + '.';

    return `${firstName} ${lastInitial}`;
  }
}

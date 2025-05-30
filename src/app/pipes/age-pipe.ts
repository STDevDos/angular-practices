import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})

export class AgePipe implements PipeTransform {
  transform(value: string): number {
    if (!value || value.length !== 8) return 0;

    const day = parseInt(value.substring(0, 2));
    const month = parseInt(value.substring(2, 4)) - 1; // JS months are 0-indexed
    const year = parseInt(value.substring(4, 8));

    const birthDate = new Date(year, month, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  }
}

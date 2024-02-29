import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../type/gender';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: Gender, locale?: string): string {
    if (locale === 'th') { 
      return value === Gender.MALE ? 'ชาย' : 'หญิง';
    }
    return value === Gender.MALE ? 'Male' : 'Female';
  }

}

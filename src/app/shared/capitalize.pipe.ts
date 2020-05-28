import { Pipe, PipeTransform } from '@angular/core'; //You import Pipe, a decorator, from Angular and PipeTransform is an existing interface from Angular

@Pipe({ name: 'capitalize' }) //the name you can choose freely
export class CapitalizePipe implements PipeTransform {
  transform(value: any) { // the transform function belongs to the imported Pipe
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1); // here we make a custom pip with the uppercasing from the first letter and concatenating the rest
    }
    return value;
  }
}

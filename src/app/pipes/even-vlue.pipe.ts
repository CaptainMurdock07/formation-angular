import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenvlue'
})
export class EvenVluePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): number[] {
    return value.filter(elt => elt % 2 == 0);
  }

}

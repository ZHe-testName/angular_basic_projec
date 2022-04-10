import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multBy'
})
//PipeTransform обязует нас описать метод transform
export class MultByPipe implements PipeTransform {

  transform(num: number, pow: number = 2): number {
    return num * pow;
  }

}

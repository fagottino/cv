import { Pipe, PipeTransform, ComponentFactoryResolver } from '@angular/core';

@Pipe({
  name: 'checkArrayLength'
})
export class CheckArrayLengthPipe implements PipeTransform {

  transform(args: any, index?: number): boolean {
    if (index === 0) {
      return true;
    } else {
      if (args[index - 1]) {
        console.log('IF (args[index - 1]) {');
        return false;
      } else {
        console.log('ELSE (args[index - 1]) {');
        return true;
      }
    }
  }
}

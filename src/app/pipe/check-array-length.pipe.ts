import { Pipe, PipeTransform, ComponentFactoryResolver } from '@angular/core';

@Pipe({
  name: 'checkArrayLength'
})
export class CheckArrayLengthPipe implements PipeTransform {

  transform(args: any, index?: number): boolean {
    if (args) {
      // return index === 1 && !args[index - 1];
      if (index === 0) {
        return true;
      } else {
        if (!args[index - 1]) {
          return false;
        } else {
          return true;
        }
      }
    }
  }

}

import { Pipe, PipeTransform, ComponentFactoryResolver } from '@angular/core';

@Pipe({
  name: 'checkArrayLength'
})
export class CheckArrayLengthPipe implements PipeTransform {

  transform(args: any, index?: number): boolean {
    if (index === 0 || !args[index - 1])
      return true;

    return false;
  }
}

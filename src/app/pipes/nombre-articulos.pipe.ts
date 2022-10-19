import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreArticulos'
})
export class NombreArticulosPipe implements PipeTransform {

  transform(str: string): string {
    return ">>> " + str;
  }

}

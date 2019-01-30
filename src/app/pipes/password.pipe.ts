import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class passwordPipe implements PipeTransform {

  transform(value: string, active:boolean=true): any {
    let pass = value.replace(/[\w\W]/g, '*')
    return active ? pass : value
  }
}

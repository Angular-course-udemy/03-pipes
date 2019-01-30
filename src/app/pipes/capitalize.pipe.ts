import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'capitalize'
})
export class capitalizePipe implements PipeTransform {
  transform(value: string, all:boolean = false): string {
    value = value.toLowerCase()
    
    let names = value.split(' ')
    
    if(all) {
      for(let e in names) { names[e] = names[e][0].toUpperCase() + names[e].substr(1) }
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1)
    }

    return names.join(' ')
  }
}

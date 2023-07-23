import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterMember: string) {
    if(value.length === 0 || filterMember === '') {
      return value;
    }

    const members = [];
    for (const member of value) {
      if(member['name'].includes(filterMember)) {
        members.push(member);

      }
    }
    return members;
  }

}

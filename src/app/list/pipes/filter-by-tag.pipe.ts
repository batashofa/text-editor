import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByTag'
})

export class FilterByTagPipe implements PipeTransform {
  transform(value: any, title: string): any {
    if (title === '' || undefined) {
      return value;
    }
    return value.filter((item: any) => item?.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  }
}

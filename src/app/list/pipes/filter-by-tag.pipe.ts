import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterByTag'
})

export class FilterByTagPipe implements PipeTransform {
  transform(todos: any, hash: string): any {
    if (hash === '' || undefined) {
      return todos;
    }
    return todos.filter((item: any) => item?.title.toLocaleLowerCase().includes(hash.toLocaleLowerCase()));
  }
}

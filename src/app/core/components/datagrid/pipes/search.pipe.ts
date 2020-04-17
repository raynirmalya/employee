import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/modules/employee/employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: Employee[], searchText: string): Employee[] {
    if (!items) {
      return [];
    } else if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return (
        it.employee_name
          .toString()
          .toLowerCase()
          .indexOf(searchText) > -1
      );
    });
  }
}

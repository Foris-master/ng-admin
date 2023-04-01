import { Pipe, PipeTransform } from '@angular/core';
// import { MenuItem } from './menu-item';

@Pipe({
  name: 'menuFilter'
})
export class MenuFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchText) ||
        (item.children &&
          item.children.filter((child) =>
            child.title.toLowerCase().includes(searchText)
          ).length > 0)
      );
    });
  }
}

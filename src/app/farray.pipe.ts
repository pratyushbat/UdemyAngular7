import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'farray'
})
export class FarrayPipe implements PipeTransform {



  transform(items: any[], searchText: string): any[] {
    console.log(items)
    console.log(searchText)
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }

}

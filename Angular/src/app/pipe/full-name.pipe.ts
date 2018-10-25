import { Pipe, PipeTransform } from '@angular/core';
import { Manager } from '../model/manager';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(manager: Manager): string {
    let result =manager.firstName;
    return result;
  }

}

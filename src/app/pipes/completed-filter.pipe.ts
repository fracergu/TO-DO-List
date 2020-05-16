import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'completedFilter',
  pure: false
})
export class CompletedFilterPipe implements PipeTransform {

  transform( lists: List[], completed: boolean = false): List[] {

    return lists.filter(l => completed === l.completed);
    
  }

}

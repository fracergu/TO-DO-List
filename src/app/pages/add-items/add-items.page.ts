import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ListItem } from 'src/app/models/list-item.model';
import { WishListService } from 'src/app/services/wishList.service';

@Component({
  selector   : 'app-add-items',
  templateUrl: './add-items.page.html'
})
export class AddItemsPage{

  list    : List;
  itemName: string = '';
  
  constructor( private wlService: WishListService,
               private rte : ActivatedRoute) { 

    const listId    = this.rte.snapshot.paramMap.get('listId');
          this.list = this.wlService.getList(listId);

  }

  addItem()
  {
    if ( this.itemName.length === 0)
    {
      return;
    }

    this.list.items.push(new ListItem(this.itemName));
    this.itemName = '';
    this.wlService.saveStorage();
  }

  checkCompletionState(item: ListItem){

    const pendingItems = this.list.items
                           .filter( itemData => !itemData.comp )
                           .length;

    if (pendingItems === 0)
    {
      this.list.completionDate = new Date();
      this.list.completed      = true;
    }
    else
    {
      this.list.completionDate = null;
      this.list.completed      = false;
    }

    this.wlService.saveStorage();
  }

  deleteItem(i: number)
  {
    this.list.items.splice(i, 1);
    this.wlService.saveStorage();
  }


}

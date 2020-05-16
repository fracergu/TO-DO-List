import { Component } from '@angular/core';
import { WishListService } from 'src/app/services/wishList.service';

@Component({
  selector   : 'app-tab-completed',
  templateUrl: 'tab-completed.page.html'
})
export class TabCompleted {

  constructor(public wlService: WishListService) {}

}

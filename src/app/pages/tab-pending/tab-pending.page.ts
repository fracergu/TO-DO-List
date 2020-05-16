import { Component } from '@angular/core';
import { WishListService } from 'src/app/services/wishList.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector   : 'app-tab-pending',
  templateUrl: 'tab-pending.page.html'
})
export class TabPending {

  constructor(
    public  wlService: WishListService,
    private router   : Router,
    private alertCtrl: AlertController ) { }

  async addList() {

    const alert = await this.alertCtrl.create({
      header: 'New list',
      inputs: [
        {
          name       : 'title',
          type       : 'text',
          placeholder: 'List\'s title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create',
          handler: (data) => {
            if (data.title.length == 0){
              return;
            } 
            const listaId = this.wlService.createList(data.title)
            this.router.navigateByUrl(`/tabs/tab-pending/add-items/${ listaId }`)
              
          }
        }
    ]
    });

    await alert.present();
  }

}

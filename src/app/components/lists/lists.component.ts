import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WishListService } from 'src/app/services/wishList.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html'
})
export class ListsComponent {
 
  @ViewChild( IonList, {static:false}) ionList : IonList;
  @Input() completed = true

  constructor( 
    public  wlService: WishListService,
    private router   : Router,
    private alertCtrl: AlertController
    ) { }
  
    selectList(list: List)
    {
      let tabType = "";
      this.completed ? tabType = "completed" : tabType = "pending";

      this.router.navigateByUrl(`/tabs/tab-${ tabType }/add-items/${ list.id }`)
    }

    
  deleteList(list: List)
  {
    this.wlService.deleteList(list)
  }

  async editList(lista: List)
  {
    const alert = await this.alertCtrl.create({
      header: 'Editar título',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.title
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>
          {
            this.ionList.closeSlidingItems();          

          }
        },
        {
          text: 'Guardar',
          handler: (data) => {
            console.log(data)
            if (data.titulo.length == 0){
              return;
            } 
            lista.title = data.titulo; 
            this.wlService.saveStorage();
            this.ionList.closeSlidingItems();          
          }
        }
    ]
    });

    await alert.present();
  }


}

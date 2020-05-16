import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ListsComponent } from './lists/lists.component';



@NgModule({
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent  
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }

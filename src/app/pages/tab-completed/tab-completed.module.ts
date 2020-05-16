import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabCompleted } from './tab-completed.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TabCompletedRoutingMoudle } from './tab-completed-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ComponentsModule,
    TabCompletedRoutingMoudle
  ],
  declarations: [TabCompleted]
})
export class TabCompletedModule {}

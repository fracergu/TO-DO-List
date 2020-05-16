import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabPending } from './tab-pending.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TabPendingRoutingModule } from './tab-pending-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabPendingRoutingModule,
    ComponentsModule
  ],
  declarations: [TabPending]
})
export class TabPendingMoudle {}

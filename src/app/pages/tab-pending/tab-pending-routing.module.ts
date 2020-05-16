import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPending } from './tab-pending.page';

const routes: Routes = [
  {
    path: '',
    component: TabPending,
  },
  {
    path: 'add-items/:listId',
    loadChildren: () => import('../add-items/add-items.module').then( m => m.AddPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPendingRoutingModule {}

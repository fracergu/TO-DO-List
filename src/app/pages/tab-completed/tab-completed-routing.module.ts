import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabCompleted } from './tab-completed.page';

const routes: Routes = [
  {
    path: '',
    component: TabCompleted,
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
export class TabCompletedRoutingMoudle {}

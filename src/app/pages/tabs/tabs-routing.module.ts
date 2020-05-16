import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-pending',
        loadChildren: () => import('../tab-pending/tab-pending.module').then(m => m.TabPendingMoudle)
      },
      {
        path: 'tab-completed',
        loadChildren: () => import('../tab-completed/tab-completed.module').then(m => m.TabCompletedModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-pending',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-pending',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

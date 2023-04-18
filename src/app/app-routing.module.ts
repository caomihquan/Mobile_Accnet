import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/core/src/lib/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screens/tabs/tabs.module').then((m) => m.TabsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

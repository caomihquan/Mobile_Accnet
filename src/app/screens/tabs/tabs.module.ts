import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from 'projects/core/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { AuthGuard } from 'projects/core/src/lib/services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    //canActivate:[AuthGuard]
    component: TabsPage,
    children: [
      {
        path: 'tabHome',
        loadChildren: () => import('./tabHome/tabHome.module').then((m) => m.TabHomeModule),
      },
      {
        path: 'tab2',
        component:Tab2Page
      },
      {
        path: 'tab3',
        component:Tab3Page
      },
      {
        path: '',
        redirectTo: '/tabs/tabHome',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tabHome',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   redirectTo: '/Login',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  declarations: [Tab2Page,Tab3Page,TabsPage],
  imports: [
    CommonModule,
    IonicModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forChild(routes)
  ],
})

export class TabsModule { }

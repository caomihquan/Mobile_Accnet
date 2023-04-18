import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'projects/core/src/public-api';
import { TabHomePage } from './tabHome.component';
const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component:TabHomePage
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ]
},
];

const COMPONENT: Type<any>[] = [
  TabHomePage
];

@NgModule({
  declarations: [COMPONENT],
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
export class TabHomeModule { }

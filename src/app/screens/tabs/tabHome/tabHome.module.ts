import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'projects/core/src/public-api';
import { TabHomePage } from './tabHome.component';
import { CardContractComponent } from './card-contract/card-contract.component';
import { CardProductComponent } from './card-product/card-product.component';
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
  TabHomePage,
  CardContractComponent,
  CardProductComponent
];

@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
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
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TabHomeModule { }

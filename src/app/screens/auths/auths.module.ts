import { RouterModule, Routes } from '@angular/router';
import { AuthsPage } from './auths.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from 'projects/core/src/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginPage } from './login/login.component';
import { AuthGuard } from 'projects/core/src/lib/services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'auths',
    //canActivate:[AuthGuard]
    component: AuthsPage,
    children: [
      {
        path: 'login',
        component:LoginPage
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '/Login',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  declarations: [LoginPage,AuthsPage],
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

export class AuthsModule { }

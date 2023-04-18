import { IonicModule } from '@ionic/angular';
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppHeaderComponent } from './AppHeader/AppHeader.component';
import { AppInputComponent } from './AppInput/AppInput.component';



const COMPONENT: Type<any>[] = [
  AppHeaderComponent,
  AppInputComponent
];

const MODULES: Type<any>[] = [
  //NgCalendarModule,
];
//NgCalendarModule,
@NgModule({
  declarations: [COMPONENT],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    ...MODULES
  ],
  exports: [MODULES, ...COMPONENT],
  // providers:[
  //   NgCalendarModule,
  //   {
  //     provide:LOCALE_ID, useValue: 'fr-FR'
  //   },
  // ],
})
export class ControlsModule { }

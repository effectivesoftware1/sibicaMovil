import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PanoramaRiesgosPageModule } from '../panorama-riesgos/panorama-riesgos.module';


@NgModule({
  imports: [
    PanoramaRiesgosPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]  
})
export class HomePageModule {}

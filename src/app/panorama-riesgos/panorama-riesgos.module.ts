import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PanoramaRiesgosPage } from './panorama-riesgos.page';

const routes: Routes = [
  {
    path: '',
    component: PanoramaRiesgosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PanoramaRiesgosPage]
})
export class PanoramaRiesgosPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PanoramaRiesgosPage } from './panorama-riesgos.page';


@NgModule({
  imports: [CommonModule,IonicModule],
  declarations: [PanoramaRiesgosPage],
  entryComponents:[PanoramaRiesgosPage],
  exports:[PanoramaRiesgosPage]
})
export class PanoramaRiesgosPageModule {}

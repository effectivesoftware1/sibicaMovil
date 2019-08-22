import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { InicioComponent } from './inicio.component';
import { EsriMapComponent } from '../esri-map/esri-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: InicioComponent
      }
    ])
  ],
  declarations: [InicioComponent,EsriMapComponent]
})
export class InicioModule {}

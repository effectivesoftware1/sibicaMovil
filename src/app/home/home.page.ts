import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PanoramaRiesgosPage } from '../panorama-riesgos/panorama-riesgos.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) { }


  // alerta() {
  //   if (window.menubar.visible) {
  //     //Tab
  //   } else {
  //     //"Child" Window
  //   }
  // }
  async abrirModal() {
    var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
    console.log("valor de newUrl", newURL);
    const modal = await this.modalController.create({
      component: PanoramaRiesgosPage
    });
    return await modal.present();
  }

}

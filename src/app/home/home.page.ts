import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { PanoramaRiesgosPage } from '../panorama-riesgos/panorama-riesgos.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit(): void {
    this.presentAlert();
  }

  constructor(public modalController: ModalController, public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Apreciado Usuario',
      message: 'La información aquí consignada NO corresponde a la totalidad de predios de propiedad del municipio de Santiago de Cali. Se irá actualizando periódicamente en el Geovisor SIBICA, de acuerdo a la verificación de inventario de Bienes Inmuebles de propiedad del municipio de Santiago de Cali',
      buttons: ['OK']
    });

    await alert.present();
  }
  async abrirModal() {
    var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
    console.log("valor de newUrl", newURL);
    const modal = await this.modalController.create({
      component: PanoramaRiesgosPage
    });
    return await modal.present();
  }

}

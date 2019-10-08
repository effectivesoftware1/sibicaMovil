import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-panorama-riesgos',
  templateUrl: './panorama-riesgos.page.html',
  styleUrls: ['./panorama-riesgos.page.scss'],
})
export class PanoramaRiesgosPage implements OnInit {

  constructor(private nav: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {

  }
  
  closeModal() {
    this.modalCtrl.dismiss();
  }

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'login',
  templateUrl: 'login.page.html',

  styleUrls: ['login.page.scss']
})
export class Login {
  usuarioIngresado: string;
  idUsuario: number;
  constructor(private serviceAuth: AuthService, private navCtrl: NavController) { }


  login(form: NgForm) {
    this.usuarioIngresado = form.value.email;

    if (this.usuarioIngresado.indexOf("Jose")) {
      this.idUsuario = 3
    } else if (this.usuarioIngresado.indexOf("CHEPE")) {
      this.idUsuario = 1
    } else if (this.usuarioIngresado.indexOf("CASTILLO")) {
      this.idUsuario = 2
    } else if (this.usuarioIngresado.indexOf("NESTOR")) {
      this.idUsuario = 4
    } else if (this.usuarioIngresado.indexOf("EVER")) {
      this.idUsuario = 5
    } else if (this.usuarioIngresado.indexOf("MIGUEL")) {
      this.idUsuario = 6
    }
    this.serviceAuth.loginPru(this.idUsuario).subscribe(
      data => {
        console.log("valor de data", data);
        this.navCtrl.navigateRoot('/tabs');
      },
      error => {
        console.log("error", error);
        this.navCtrl.navigateRoot('/tabs');
      },
      () => {
        console.log("cayo aqui");
        // this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }


}

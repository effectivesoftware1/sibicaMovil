import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarioIngresado: string;
  passwordIngresado: string;
  constructor(private loginService: AuthService, private navCtrl: NavController, public toastController: ToastController) { }

  login(form: NgForm) {
    this.usuarioIngresado = form.value.email;
    this.passwordIngresado = form.value.email;

    this.loginService.login(this.usuarioIngresado, this.passwordIngresado).subscribe(data => {
      // console.log("error", error);
      // this.navCtrl.navigateRoot('/tabs');
    },
      error => {
        // console.log("error", error);
        // this.navCtrl.navigateRoot('/tabs');
      }
    );
  }

  ngOnInit() {
  }

}

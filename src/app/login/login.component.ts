import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  usuarioIngresado: string;
  passwordIngresado: string;
  idUsuario: number;
  constructor(private serviceAuth: AuthService, private navCtrl: NavController) { }


  login(form: NgForm) {
    this.usuarioIngresado = form.value.email;
    this.passwordIngresado = form.value.email;

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
    this.serviceAuth.login(this.usuarioIngresado,this.passwordIngresado).subscribe(data => {
        console.log("valor de data", data);
        if(data.status==1){
           // if (res.user) {
        //   await this.storage.set("ACCESS_TOKEN", res.user.access_token);
        //   await this.storage.set("EXPIRES_IN", res.user.expires_in);
        //   this.authSubject.next(true);
        // }
        }
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

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

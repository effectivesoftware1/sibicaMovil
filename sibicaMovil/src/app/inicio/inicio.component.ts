import { Component} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthResponsePrueba } from '../auth/auth-response-prueba';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'inicio.component.html',
  styleUrls: ['inicio.component.scss'],
})
export class InicioComponent {

  // Set our map properties
  // mapCenter = [-76.52053, 3.42158];
  // basemapType = 'hybrid';
  // mapZoomLevel = 15;
  usuarios: AuthResponsePrueba[];
  constructor(private serviceAuth: AuthService, public platform: Platform) { }


  ngOnInit() {
    this.loadAll();
  }


  loadAll() {
    this.serviceAuth.getUsuarios().subscribe(
      (res: HttpResponse<AuthResponsePrueba[]>) => {
        this.usuarios = res.body;
        console.log("data de usuarios.>", this.usuarios);
      },
      (res: HttpErrorResponse) => this.onError(res.message)
    );
  }

  mapLoadedEvent(status: boolean) {
    console.log('The map has loaded: ' + status);
  }

  private onError(errorMessage: string) {
    // alert("error al traer datos" + errorMessage);
  }
}

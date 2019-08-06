import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AuthResponsePrueba } from '../auth/auth-response-prueba';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { loadModules } from 'esri-loader';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  // Set our map properties
  mapCenter = [-76.52053, 3.42158];
  basemapType = 'streets';
  mapZoomLevel = 12;
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

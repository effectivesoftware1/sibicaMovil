import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.scss']
})
export class EsriMapComponent implements OnInit {  
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  constructor() { }

  ngOnInit() {   

    loadModules([
      'esri/Map',
      'esri/views/MapView',
      "esri/Graphic"
    ])
      .then(([EsriMap, EsriMapView, Graphic]) => {
        const map = new EsriMap({
          basemap: 'streets'
        });

        const mapView = new EsriMapView({
          container: this.mapViewEl.nativeElement,
          // center: [-76.52053, 3.42158],
          center: [-76.532502, 3.453273],
          zoom: 17,
          map: map
        });

        mapView.when(function () {                    
          var polygon = {
            type: "polygon",
            rings: [
              [-76.532502, 3.453273],
              [-76.532657,3.4533636],
              [-76.532311,3.453899],
              [-76.531925,3.453571]             
            ]
          };

          // Create a symbol for rendering the graphic
          var fillSymbol = {
            type: "simple-fill", // autocasts as new SimpleFillSymbol()
            color: [227, 139, 79, 0.8],
            outline: {
              // autocasts as new SimpleLineSymbol()
              color: [255, 255, 255],
              width: 1
            }
          };

          var polygonGraphic = new Graphic({
            geometry: polygon,
            symbol: fillSymbol
          });

          // Add the graphics to the view's graphics layer
          mapView.graphics.addMany([polygonGraphic]);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
}
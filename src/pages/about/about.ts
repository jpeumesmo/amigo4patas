import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions} from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
   map: GoogleMap;
  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps) {

  }

  ionViewDidLoad() {
 this.loadMap();
}

loadMap() {

  let mapOptions: GoogleMapOptions = {
    camera: {
      target: {
        lat: -21.1171519,
        lng: -44.2473204
      },
      zoom: 7,
      tilt: 30
    }
  };

  this.map = this.googleMaps.create('map', mapOptions);

  // Wait the MAP_READY before using any methods.
  this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      console.log('Map is ready!');

      // Now you can use all methods safely.
      this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });
        });

    });
}
}

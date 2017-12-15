import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, MarkerOptions, Marker, HtmlInfoWindow } from '@ionic-native/google-maps';
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
      zoom: 14,
      tilt: 30
    }
  };
  this.map = this.googleMaps.create('map', mapOptions);

  // Wait the MAP_READY before using any methods.
  this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      console.log('Map is ready!');

      var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Perdido</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Tipo</b> Cachorro<br><b>Data</b> 15/12/2017 </p>' +
          '<img src=file:///android_asset/www/assets/imgs/elder.jpg height="160" width="120"/>'+
          '</div>'+
          '</div>';

      var infowindow = new HtmlInfoWindow();
      //var infowindow = this.map.HtmlInfoWindow({
        infowindow.setContent(contentString,{width: "210px", height: "280px"} );
      //});

      // Now you can use all methods safely.
      this.map.addMarker({
          title: 'Cachorro',
          icon: 'blue',
//          icon: 'file:///android_asset/www/assets/imgs/elder.jpg',
          visible: true,
          animation: 'BOUNCE',
          position: {
            lat: -21.1171519,
            lng: -44.2473204
          }
        })
        .then(marker => {

          //marker.showInfoWindow();
          //marker.setVisible(true);
          //alert(marker.isVisible());
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              infowindow.open(marker);
            });
        });

    });
}
}

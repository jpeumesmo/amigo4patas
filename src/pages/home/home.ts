import { Geolocation ,GeolocationOptions ,Geoposition  } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  getUserPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {
    alert("Latitude: "+resp.coords.latitude+"\n"+"Longitude: "+resp.coords.longitude);
    //var adress = maps.googleapis.com/maps/api/geocode/json?latlng+resp.coords.latitude+,+resp.coords.longitude&sensor=true
    //alert(adress);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  reportarAnimal(){
    alert("animal reportado");
  }
}

import { Geolocation ,GeolocationOptions ,Geoposition  } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  addr : String = "";
  constructor(public navCtrl: NavController, private geolocation: Geolocation, public httpClient: Http) {

  }

  getUserPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {
    var adress = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+resp.coords.latitude+','+resp.coords.longitude+'&sensor=true&key=AIzaSyA6I5qGw32enFAJyi-BZb3eV4fjRO6hx3g';
    var endereco = this.httpClient.get(adress);
    endereco.subscribe(results => {

        if ( "_body" in results ) {
            this.addr = JSON.parse(results["_body"]).results[0].formatted_address;
        }
//        console.log(JSON.parse(results._body).results[0].formatted_address);
    });
//    alert("Latitude: "+resp.coords.latitude+"\n"+"Longitude: "+resp.coords.longitude);
    //alert(adress);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  reportarAnimal(){
    console.log("Digitado "+this.addr);
    var adress = "https://maps.googleapis.com/maps/api/geocode/json?address="+this.addr+"&key=AIzaSyA6I5qGw32enFAJyi-BZb3eV4fjRO6hx3g";
    var endereco = this.httpClient.get(adress);
    endereco.subscribe(results => {

        if ( "_body" in results ) {
            //this.addr = JSON.parse(results["_body"]).results[0].location;
          //  alert ("lat: "+JSON.parse(results["_body"]).results[0].geometry.location.lat+"\n"+"lng: "+JSON.parse(results["_body"]).results[0].geometry.location.lng);
    //        console.log("lat: "+JSON.parse(results["_body"]).results[0].geometry.location.lat);
    //        console.log("lng: "+JSON.parse(results["_body"]).results[0].geometry.location.lng);
          //var enderecoDigitado = this.addr;
          var lat = JSON.parse(results["_body"]).results[0].geometry.location.lat;
          var lng = JSON.parse(results["_body"]).results[0].geometry.location.lng;
          alert("lat: "+lat+"\n"+"lng: "+lng);
        }
//        console.log(JSON.parse(results._body).results[0].formatted_address);
    });
    //alert("animal reportado");
  }
}


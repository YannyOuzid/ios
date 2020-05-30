import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

declare var google:any;

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent implements OnInit {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(public router : Router) { }

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(48.8464, 2.3481);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: false
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  ngOnInit() {}

  goToParcours(){
    this.router.navigateByUrl('parcours')
  }

  goToHome(){
    this.router.navigateByUrl('')
  }

  goToProfil(){
    this.router.navigateByUrl('profil')
  }

  goToMap(){
    this.router.navigateByUrl('map')
  }

  goToObjectif(){
    this.router.navigateByUrl('objectif')
  }

}

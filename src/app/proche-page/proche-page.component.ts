import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from "@angular/core";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SecondPage } from '../modal/second/second.page';


declare var google:any;

@Component({
  selector: 'app-proche-page',
  templateUrl: './proche-page.component.html',
  styleUrls: ['./proche-page.component.scss'],
})

export class ProchePageComponent implements OnInit {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(public router : Router, public modalController: ModalController) { }

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(48.8464, 2.3481);
    const options = {
      center: location,
      zoom: 10,
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

  async clickModal() {
    const modal = await this.modalController.create({
      component: SecondPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}

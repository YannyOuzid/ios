import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'slides-example',
  template: `
      <ion-header [translucent]="true">
          <ion-toolbar>
              <ion-buttons slot="start" style="z-index: 1009;">
                  <ion-back-button></ion-back-button>
              </ion-buttons>

              <ion-title>
                  Tutoriel
              </ion-title>

          </ion-toolbar>
      </ion-header>
    <ion-content>
      <ion-slides pager="false" [options]="slideOpts">
        <ion-slide>
          <ion-img src="../assets/slide1.png"></ion-img>           
        </ion-slide>
        <ion-slide>
          <ion-img src="../assets/slide2.png"></ion-img>
        </ion-slide>
        <ion-slide>
          <ion-img src="../assets/slide3.png"></ion-img>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `
})
export class TutorialPageComponent implements OnInit {
    // Optional parameters to pass to the swiper instance.
    // See http://idangero.us/swiper/api/ for valid options.
    slideOpts = {
      initialSlide: 0,
      speed: 400
    };
  constructor() {}
  ngOnInit() {}
}

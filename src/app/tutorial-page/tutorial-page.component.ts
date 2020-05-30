import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'slides-example',
  template: `
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

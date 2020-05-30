import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'slides-example',
  template: `
    <ion-content>
      <ion-slides pager="false" [options]="slideOpts">
        <ion-slide>
          <h1>Slide 1</h1>
          <ion-card>
            <h2>Hello guys</h2>
          </ion-card>
          
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `
})
export class TutorialPageComponent implements OnInit {
    // Optional parameters to pass to the swiper instance.
    // See http://idangero.us/swiper/api/ for valid options.
    slideOpts = {
      initialSlide: 1,
      speed: 400
    };
  constructor() {}
  ngOnInit() {}
}

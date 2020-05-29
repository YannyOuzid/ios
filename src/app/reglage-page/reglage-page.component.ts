import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reglage-page',
  templateUrl: './reglage-page.component.html',
  styleUrls: ['./reglage-page.component.scss'],
})
export class ReglagePageComponent implements OnInit {

  constructor(public router : Router) { }

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

  goToTuto(){
    this.router.navigateByUrl('tutorial')
  }

}

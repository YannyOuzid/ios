import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss'],
})
export class ProfilPageComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {}

  goToHome(){
    this.router.navigateByUrl('')
  }

  goToReglages(){
    this.router.navigateByUrl('reglages')
  }

  goToParcours(){
    this.router.navigateByUrl('parcours')
  }


  goToProfil(){
    this.router.navigateByUrl('profil')
  }

}

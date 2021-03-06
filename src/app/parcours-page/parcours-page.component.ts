import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcours-page',
  templateUrl: './parcours-page.component.html',
  styleUrls: ['./parcours-page.component.scss'],
})
export class ParcoursPageComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {}

  goToHome(){
    this.router.navigateByUrl('')
  }

  goToReglages(){
    this.router.navigateByUrl('reglages')
  }

  goToRecherche(){
    this.router.navigateByUrl('recherche')
  }

  goToProfil(){
    this.router.navigateByUrl('profil')
  }

  goToParcours(){
    this.router.navigateByUrl('parcours')
  }

  goToMap(){
    this.router.navigateByUrl('map')
  }

  goToCreer(){
    this.router.navigateByUrl('creer')
  }

  goToProche(){
    this.router.navigateByUrl('proche')
  }

  


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche-page',
  templateUrl: './recherche-page.component.html',
  styleUrls: ['./recherche-page.component.scss'],
})
export class RecherchePageComponent implements OnInit {

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

  goToReglages(){
    this.router.navigateByUrl('reglages')
  }

  goToProche(){
    this.router.navigateByUrl('proche')
  }

}
